import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'prisma/prisma.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { StudentModule } from './student/student.module';
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
      rootPath: 'uploads',
      serveRoot: '/static', // 需要添加'/' 此处相当于添加前缀
    }),
    StudentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
