import { Injectable } from '@nestjs/common';
import {}
@Injectable()
export class StudentService {
    async getUsers(pageQuery: any) {
        console.log(pageQuery);
        let user = await this.prisma.user.findMany({
          select: {
            id: true,
            name: true,
            city: true,
            gender: true,
            introduce: true,
            avatar: true,
          },
          where: { isDelete: 0 },
          take: pageQuery.pageSize,
          skip: (pageQuery.currentPage - 1) * pageQuery.pageSize,
        });
        return {
          code: 0,
          msg: 'success',
          data: user,
        };
      }
      async getCount() {
        let count = await this.prisma.user.count({
          where: { isDelete: 0 },
        });
        return {
          code: 0,
          msg: 'success',
          data: count,
        };
      }
      async upLoad(file: Express.Multer.File, sid: any): Promise<string> {
        // 到这里其实文件已经上传到服务器本地了，需要有后续的存储需求，比如要上传到云存储服务中，可以在这里继续处理
        // 返回文件URL
        let fileUrl = `http://localhost:3000/static/${file.filename}`;
        // 存入数据库
        await this.prisma.user.update({
          where: { id: JSON.parse(sid.id) },
          data: { avatar: fileUrl },
        });
        return fileUrl;
        // return {
        //   code: 0,
        //   msg: 'success',
        //   data: user,
        // };
      }

}