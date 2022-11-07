import { Body, Controller, Param, Post, Render, UseGuards } from '@nestjs/common';
import { JwtService } from 'src/providers/services/jwt.service';
import { Skip } from 'src/decorators/skip.decorator';
import { AuthGuard } from 'src/providers/guards/auth.guard';
import { LTIGuard } from 'src/providers/guards/lti.guard';
import { UserObj } from 'src/decorators/user.decorator';
import { LTILaunchDto } from 'src/dto/lti_launch.dto';
import { User, RoleKey } from '@prisma/client';
import { PrismaService } from 'src/providers/services/prisma.service';

@Controller()
export class LTILaunchesController {
  constructor(private jwtService: JwtService, private prisma: PrismaService) {}

  @Post('/lti_launches')
  @Skip(AuthGuard)
  @UseGuards(LTIGuard)
  @Render('index')
  async index(@Body() body: LTILaunchDto, @UserObj() user) {
    const settings = {
      isLTI: true,
      ltiLaunchParams: body,
      jwt: this.jwtService.issueToken({
        userId: user.id,
        contextId: body.context_id,
        roles: body.ext_roles.split(',') as RoleKey[],
        contentItemReturnUrl: body.content_item_return_url,
      }),
    };
    return { data: JSON.stringify(settings) };
  }

  @Post('/lti_launches/:token')
  @Skip(AuthGuard)
  @UseGuards(LTIGuard)
  @Render('index')
  async show(@Param('token') token: string, @Body() body: LTILaunchDto, @UserObj() user: User) {
    const ltiLaunchConfig = await this.prisma.lTILaunch.findUnique({
      where: {
        token
      }
    });

    const settings = {
      isLTI: true,
      ltiLaunchParams: body,
      jwt: this.jwtService.issueToken({
        userId: user.id,
        contextId: body.context_id,
        roles: body.ext_roles.split(',') as RoleKey[],
        contentItemReturnUrl: body.content_item_return_url,
      }),
      ltiLaunchConfig,
    };
    return { data: JSON.stringify(settings) };
  }
}
