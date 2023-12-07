import { Controller } from '@nestjs/common';
import { StudentService } from './student.service';
impo
@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
}
