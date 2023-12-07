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
    let user = await this.prisma.user.findMany();
    return {
      code: 0,
      msg: 'success',
      data: user,
    };
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