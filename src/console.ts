import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CreateStudentDto } from './student/dto/create-student.dto';
import { StudentService } from './student/student.service';

async function bootstrap() {
    const application = await NestFactory.createApplicationContext(
        AppModule,
    );

    const command = process.argv[2];

    switch (command) {
        case 'run-token':
            console.log('inside run-token');
            const newStudent = new CreateStudentDto();
            newStudent.name = "Vahe";
            const studentService = application.get(StudentService);
            const createdStudent = await studentService.create(newStudent);
            console.log('student created successfuly');
            console.log(createdStudent);
            break;
        default:
            console.log('Command not found');
            process.exit(1);
    }

    await application.close();
    process.exit(0);
}

bootstrap();