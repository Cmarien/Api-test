import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { StatsModule } from './stats/stats.module';
import { PassportModule } from '@nestjs/passport';
import { GameModule } from './game/game.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    PrismaModule,
    StatsModule,
    PassportModule.register({ session: true }),
    GameModule
  ],
})
export class AppModule {}
