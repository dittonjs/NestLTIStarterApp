import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { LTILaunchDto } from "src/dto/lti_launch.dto";
import { RoleKey } from "@prisma/client";
import { ROLE_KEYS } from "src/providers/util/role_keys";
import { NonceService } from "src/providers/services/nonce.service";
import { LTIUtil } from "src/providers/util/lti.util";
import { PrismaService } from "../services/prisma.service";

@Injectable()
export class LTIGuard implements CanActivate {
  constructor(
    private ltiUtil: LTIUtil,
    private nonceService: NonceService,
    private prisma: PrismaService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const body = req.body as LTILaunchDto;

    // check nonce
    const validNonce = await this.nonceService.validate(body.oauth_nonce);
    if (!validNonce) return false;

    if (this.ltiUtil.isValidLTIRequest(req)) {
      // try to find existing user
      let user = await this.prisma.user.findUnique({
        where: {
          lmsUserId: body.custom_canvas_user_id,
        },
        include: {
          userRoles: true,
        },
      });

      if (!user) {
        const roleKeys: RoleKey[] = body.ext_roles
          .split(",")
          .map((key) => ROLE_KEYS[key]);

        const roles = await this.prisma.role.findMany({
          where: {
            roleKey: {
              in: roleKeys,
            },
          },
        });
        user = await this.prisma.user.create({
          data: {
            email: this.ltiUtil.generateRandomEmail(),
            passwordHash: await this.ltiUtil.generateRandomPasswordHash(),
            firstName: body.lis_person_name_given,
            lastName: body.lis_person_name_family,
            lmsEmail: body.lis_person_contact_email_primary,
            lmsUserId: body.custom_canvas_user_id,
            userRoles: {
              createMany: {
                data: roles.map((role) => ({
                  contextId: body.context_id,
                  roleId: role.id,
                })),
              },
            },
          },
          include: {
            userRoles: true,
          },
        });
      }

      req.user = user;
      return true;
    }
    return false;
  }
}
