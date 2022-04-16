import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
import { Model } from 'mongoose'

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name)
    private readonly student: Model<Student>
  ) {}

  create(createStudentDto: CreateStudentDto) {
    const newStudent = new this.student(createStudentDto);
    return newStudent.save();
  }

  async findAll() {
    const result = await this.student.find({}).exec();
    return result;
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
