import { PrismaClient } from '@prisma/client';
import bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

const randomIntFromInterval = (min: number, max: number): number => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}


async function main() {
    const students = [
        { studentId: 'S001', name: 'Alice', password: 'password1' },
        { studentId: 'S002', name: 'Bob', password: 'password2' },
    ];

    for (const student of students) {
        const hashedPassword = await bcrypt.hash(student.password, 10);
        await prisma.student.create({
            data: {
                studentId: student.studentId,
                name: student.name,
                department: 'COMPUTER_SCIENCE',
                password: {
                    create: {
                        hashedPassword,
                    },
                },
                classRoom: {
                    connect: [{ id: 1 }, { id: 4 }], // ランダムに5つのクラスルームを関連付ける
                },
            },
        });
    }

}

main()
    .catch((e) => {
        console.error(e);
        // process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });