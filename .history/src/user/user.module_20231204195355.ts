import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
impo
@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
