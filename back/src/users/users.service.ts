import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // PrismaServiceをインポート
import {
  ResponseChangePassword,
  ResponseEditSelectClassroom,
  ResponseSelectedRooms,
  StudentDTO,
} from './users.dto';
import bcrypt = require('bcryptjs');
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService, // PrismaServiceをDIして使用
  ) {}

  // ユーザーを一人を返す
  async findOne(studentId: string): Promise<StudentDTO | null> {
    // Prismaを使用してDBにアクセスして、ユーザーを取得する
    const result = this.prisma.student.findUnique({
      where: { studentId: studentId },
      include: {
        password: true,
      },
    });
    return result;
  }

  async changePassword(
    studentId: string,
    password: string,
  ): Promise<ResponseChangePassword> {
    // Prismaを使用してDBにアクセスして、ユーザーを取得する
    const hashedPassword = await bcrypt.hash(password, 10);
    const updatePassword = await this.prisma.password.update({
      where: { studentId: studentId },
      data: {
        hashedPassword: hashedPassword,
      },
    });

    return { studentId: updatePassword.studentId };
  }

  async selectedClassRoom(studentId: string): Promise<ResponseSelectedRooms> {
    const studentWithClassRooms = await this.prisma.student.findUnique({
      where: { studentId: studentId },
      include: { classRoom: true },
    });

    const classRooms = studentWithClassRooms.classRoom;

    return { classrooms: classRooms };
  }

  async editSelectedClassRoom(
    id: number,
    studentId: string,
  ): Promise<ResponseEditSelectClassroom> {
    try {
      const student = await this.prisma.student.findUnique({
        where: { studentId: studentId },
        include: { classRoom: true },
      });
      if (!student) {
        return { resultText: 'error: Student not found' };
      }
      if (!student.classRoom.some((classroom) => classroom.id === id)) {
        return { resultText: 'error: Classroom not linked to student' };
      }

      await this.prisma.student.update({
        where: { studentId: studentId },
        data: {
          classRoom: {
            disconnect: [{ id: id }],
          },
        },
      });

      return { resultText: 'done' };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        return { resultText: `error: ${error.message}` };
      }
      return { resultText: 'error: An unexpected error occurred' };
    }
  }
}
