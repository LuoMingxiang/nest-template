import { Controller } from '@nestjs/common';
import { StudentService } from './student.service';
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
@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) { }
  
  @Post() getStudents(@Body() pageQuery: any) {
    console.log(pageQuery);
    return this.userService.getUsers(pageQuery);
  }
}
