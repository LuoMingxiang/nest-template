import { Controller } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) { }
  
  @Post() getStudent(@Body() pageQuery: any) {
    console.log(pageQuery);
    return this.userService.getUsers(pageQuery);
  }
}
