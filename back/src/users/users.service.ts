import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // PrismaServiceをインポート
import { Student } from '@prisma/client'; // Prismaで定義したUserモデル
import { StudentDTO } from './users.dto';

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
}