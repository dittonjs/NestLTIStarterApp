import { Module } from "@nestjs/common";
import { LTILaunchesController } from "src/controllers/lti_launches.controller";
import { LTIGuard } from "src/providers/guards/lti.guard";
import { NonceService } from "src/providers/services/nonce.service";
import { LTIUtil } from "src/providers/util/lti.util";
import { UsersModule } from "./users.module";

@Module({
  imports: [UsersModule],
  controllers: [LTILaunchesController],
  providers: [NonceService, LTIUtil, LTIGuard],
})
export class LTILaunchesModule {}
