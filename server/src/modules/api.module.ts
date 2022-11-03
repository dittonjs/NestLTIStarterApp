import { Module } from "@nestjs/common";
import { LTILaunchesController } from "src/controllers/api/lti_launches.controller";
import { LTIUtil } from "src/providers/util/lti.util";
import { UsersModule } from "./users.module";

@Module({
  imports: [UsersModule],
  controllers: [LTILaunchesController],
  providers: [LTIUtil],
  exports: [LTIUtil],
})
export class ApiModule {}
