import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { PrismaModule } from 'prisma/prisma.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import config from './config';
@Module({
  imports: [
    PrismaModule,
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    ServeStaticModule.forRoot({
      // rootPath: join(__dirname, 'uploads'),
      rootPath
      serveRoot: '/static', // 需要添加'/' 此处相当于添加前缀
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
