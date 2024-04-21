import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // PrismaServiceをインポート
import { Student } from '@prisma/client'; // Prismaで定義したUserモデル
import { ResponseChangePassword, ResponseSelectedRooms, StudentDTO } from './users.dto';
import bcrypt = require('bcryptjs');

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
}