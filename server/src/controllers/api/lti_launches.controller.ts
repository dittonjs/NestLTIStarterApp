import { Body, Controller, Post, Req } from "@nestjs/common";
import { LTIUtil } from "src/providers/util/lti.util";
import * as crypto from "crypto";
import * as oauth from "oauth-signature";
import { JwtBody } from "src/decorators/jwt_body.decorator";
import { JwtBodyDto } from "src/dto/jwt_body.dto";
import { Request } from "express";
import { PrismaService } from "src/providers/services/prisma.service";

@Controller()
export class LTILaunchesController {
  constructor(private ltiUtil: LTIUtil, private prisma: PrismaService) {}

  @Post("/api/lti_launches")
  async create(
    @Body() config: Record<string, any>,
    @JwtBody() jwtBody: JwtBodyDto,
    @Req() req: Request
  ) {

    const ltiLaunch = await this.prisma.lTILaunch.create({
      data: {
        config,
        token: crypto.randomBytes(16).toString("hex"),
      }
    })
    console.log(config, req.body);

    const nonce = crypto.randomBytes(16).toString("base64");
    const response: Record<string, any> = {
      content_items: JSON.stringify(
        this.ltiUtil.generateContentItem(
          "LTI Content Item",
          `${process.env.APP_URL}/lti_launches/${ltiLaunch.token}`
        )
      ),
      lti_message_type: "ContentItemSelection",
      lti_version: "LTI-1p0",
      oauth_consumer_key: process.env.LTI_KEY,
      oauth_nonce: nonce,
      oauth_signature_method: "HMAC-SHA1",
      oauth_timestamp: `${Math.floor(Date.now() / 1000)}`,
      oauth_version: "1.0",
    };

    response.oauth_signature = decodeURIComponent(
      oauth.generate(
        "POST",
        jwtBody.contentItemReturnUrl,
        response,
        process.env.LTI_SECRET
      )
    );
    return response;
  }
}
