import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // PrismaServiceをインポート
import { Student } from '@prisma/client'; // Prismaで定義したUserモデル
import { RequestEditSelectClassroom, ResponseChangePassword, ResponseEditSelectClassroom, ResponseSelectedRooms, StudentDTO } from './users.dto';
import bcrypt = require('bcryptjs');
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class UsersService {

    constructor(
        private readonly prisma: PrismaService // PrismaServiceをDIして使用
    ) { }

    // ユーザーを一人を返す
    async findOne(studentId: string): Promise<StudentDTO | null> {
        // Prismaを使用してDBにアクセスして、ユーザーを取得する
        const result = this.prisma.student.findUnique({
            where: { studentId: studentId },
            include: {
                password: true,
            },
        });
        return result
    }

    async changePassword(studentId: string, password: string): Promise<ResponseChangePassword> {
        // Prismaを使用してDBにアクセスして、ユーザーを取得する
        const hashedPassword = await bcrypt.hash(password, 10);
        const updatePassword = await this.prisma.password.update({
            where: { studentId: studentId },
            data: {
                hashedPassword: hashedPassword
            }

        });

        return { studentId: updatePassword.studentId }
    }

    async selectedClassRoom(studentId: string): Promise<ResponseSelectedRooms> {

        const studentWithClassRooms = await this.prisma.student.findUnique({
            where: { studentId: studentId },
            include: { classRoom: true },
        });

        const classRooms = studentWithClassRooms.classRoom;

        return { classrooms: classRooms };
    }

    async editSelectedClassRoom(id: number, studentId: string): Promise<ResponseEditSelectClassroom> {
        try {
            console.log('check point 1')
            const student = await this.prisma.student.findUnique({
                where: { studentId: studentId },
                include: { classRoom: true }
            });
            console.log('check point 2')
            // Check if the student exists and has the specified classroom
            if (!student) {
                console.log('check point 3')
                return { resultText: 'error: Student not found' };
            }
            if (!student.classRoom.some(classroom => classroom.id === id)) {
                console.log('check point 4')
                return { resultText: 'error: Classroom not linked to student' };
            }

            console.log('check point 5')
            // Perform the disconnect operation
            await this.prisma.student.update({
                where: { studentId: studentId },
                data: {
                    classRoom: {
                        disconnect: [{ id: id }]
                    }
                }
            });

            return { resultText: 'done' };
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                // Handle known Prisma errors
                return { resultText: `error: ${error.message}` };
            }
            // Handle unexpected errors
            return { resultText: 'error: An unexpected error occurred' };
        }
    }
}