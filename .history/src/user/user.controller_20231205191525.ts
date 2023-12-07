import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get() getUsers() {
    return this.userService.getUsers();
  }
  @Get('count') getCount() {
    return this.userService.getCount();
  }
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async upLoad(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<{ url: string }> {
    const fileUrl = await this.userService.upLoad(file);
    return { url: fileUrl };
  }
  @Post()
  async getList(@Body()) {
    return this.userService.getUsers();
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
