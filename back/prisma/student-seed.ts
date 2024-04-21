import { PrismaClient } from '@prisma/client';
import bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

const randomIntFromInterval = (min: number, max: number): number => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}


async function main() {
    console.log('main start');
    const students = [
        { studentId: 'S001', name: 'Alice', password: 'password1' },
        { studentId: 'S002', name: 'Bob', password: 'password2' },
    ];
    console.log('check point 1');

    for (const student of students) {
        console.log('check point 2');
        const hashedPassword = await bcrypt.hash(student.password, 10);
        console.log('hashedPassword', hashedPassword);
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

    console.log('Data seeded successfully');
}

main()
    .catch((e) => {
        console.error(e);
        // process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });