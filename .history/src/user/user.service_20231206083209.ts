import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'prisma/prisma.service';
@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async getUsers(pageQuery: any) {
    console.log(pageQuery);
    let user = await this.prisma.user.findMany({
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
    let count = await this.prisma.user.count();
    return {
      code: 0,
      msg: 'success',
      data: count,
    };
  }
  async upLoad(file: Express.Multer.File,id:number): Promise<string> {
    // 到这里其实文件已经上传到服务器本地了，需要有后续的存储需求，比如要上传到云存储服务中，可以在这里继续处理
    // 返回文件URL
    let fileUrl = `http://localhost:3000/static/${file.filename}`;
    // 存入数据库
    this.prisma.user.update({
      where: id,
      data: fileUrl,
    });
    return fileUrl;
    // return {
    //   code: 0,
    //   msg: 'success',
    //   data: user,
    // };
  }
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }
  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
