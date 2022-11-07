import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { AppController } from "./app.controller";
import { ApiModule } from "./modules/api.module";
import { GlobalModule } from "./modules/global.module";
import { LTILaunchesModule } from "./modules/lti_launches.module";
import { UsersModule } from "./modules/users.module";
import { PingGateway } from "./providers/gateways/ping.gateway";
import { AuthGuard } from "./providers/guards/auth.guard";
import { RolesGuard } from "./providers/guards/roles.guard";
import { GuardUtil } from "./providers/util/guard.util";

@Module({
  imports: [GlobalModule, UsersModule, LTILaunchesModule, ApiModule],
  controllers: [AppController],
  providers: [
    PingGateway,
    GuardUtil,
    { provide: APP_GUARD, useClass: AuthGuard }, // auth guard should come before roles guard
    { provide: APP_GUARD, useClass: RolesGuard }, // otherwise users won't be authenticated before roles check
  ],
})
export class AppModule {}
