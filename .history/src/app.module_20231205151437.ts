import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { PrismaModule } from 'prisma/prisma.module';
import { MulterModule } from '@nestjs/platform-express';
import config from './config';
@Module({
  imports: [
    PrismaModule,
    MulterModule
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
