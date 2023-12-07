import { Controller } from '@nestjs/common';
import { StudentService } from './student.service';
import {}
@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
}
