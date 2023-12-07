import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MulterModule } from '@nestjs/platform-express';
@Module({
  imports: [MulterModule.register({
    storage: diskStorage({
      // 指定文件存储目录
      destination: path.join(__dirname, '../uploads'), // 通过时间戳来重命名上传的文件名
      filename: (_, file, callback) => {
        const fileName = `${
          new Date().getTime() + path.extname(file.originalname)
        }`;
        return callback(null, fileName);
      },
    }),
  }),],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
