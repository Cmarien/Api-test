import { Module } from "@nestjs/common";
import { JwtModule } from '@nestjs/jwt'
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { Jwtstrategy } from "./strategy/jwt.strategy";
import { FortyTwoStrategy } from "./strategy/oauth2.strategy";
import { SessionSerializer } from "./utils/serializer";

@Module({
    imports: [JwtModule.register({})],
    controllers: [AuthController],
    providers: [AuthService, Jwtstrategy, FortyTwoStrategy, SessionSerializer],
})
export class AuthModule {}