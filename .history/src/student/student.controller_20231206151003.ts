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
@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @Post() getStudents(@Body() pageQuery: any) {
    console.log(pageQuery);
    return this.studentService.getUsers(pageQuery);
  }
  @Get('count') getCount() {
    return this.studentService.getCount();
  }
}
