import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'prisma/prisma.service';
@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async getUsers() {
    let user = await this.prisma.user.findMany();
    return {
      code: 0,
      msg: 'success',
      data: user,
    };
  }
  async upLoad() {
  async uploadFile(file: Express.Multer.File): Promise<string> {
    // 到这里其实文件已经上传到服务器本地了，需要有后续的存储需求，比如要上传到云存储服务中，可以在这里继续处理
​
    // 返回文件URL
    return `http://localhost/uploads/${file.filename}`;

作者：昆吾kw
链接：https://juejin.cn/post/7234807896146935864
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
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
