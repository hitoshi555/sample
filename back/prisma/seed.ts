import { PrismaClient, Prisma, ClassRoom, Teacher } from '@prisma/client';
const prisma = new PrismaClient();

const teacherData: Teacher[] = [
    {
        id: 1,
        name: "田中一郎",
        position: 'PROFESSOR',
    },
    {
        id: 2,
        name: "佐藤恵子",
        position: 'ASSOCIATEPROFESSOR',
    },
    {
        id: 3,
        name: "鈴木次郎",
        position: 'LECTURER',
    }
];


const classRoomData: ClassRoom[] = [
    {
        id: 1,
        name: "数学の基礎",
        description: "初心者向けの基本的な数学の概念を学びます。",
        units: 2,
        period: 'SPRING',
        timeSlot: 'FIRST',
        weekday: 'MONDAY'
    },
    {
        id: 2,
        name: "物理学入門",
        description: "運動の法則とエネルギーの基礎を探求します。",
        units: 1,
        period: 'AUTUMN',
        timeSlot: 'THIRD',
        weekday: 'MONDAY'
    },
    {
        id: 3,
        name: "化学の世界",
        description: "化学反応と元素の基本を解説します。",
        units: 1,
        period: 'SPRING',
        timeSlot: 'SECOND',
        weekday: 'MONDAY'
    },
    {
        id: 4,
        name: "生物学基本",
        description: "生命科学の基礎知識を提供します。",
        units: 2,
        period: 'AUTUMN',
        timeSlot: 'FOURTH',
        weekday: 'MONDAY'
    },
    {
        id: 5,
        name: "哲学のふれあい",
        description: "古代から現代までの哲学的思考について学びます。",
        units: 2,
        period: 'SPRING',
        timeSlot: 'FIFTH',
        weekday: 'MONDAY'
    }
];

const randomIntFromInterval = (min: number, max: number): number => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}


async function main() {
    console.log(`Start seeding ...`);
    let teacherIds = [];

    // Teacher のデータを作成
    for (const data of teacherData) {
        await prisma.teacher.create({
            data: data
        });
    }

    // ClassRoom のデータを作成
    for (const data of classRoomData) {
        await prisma.classRoom.create({
            data: {
                ...data,
                teacher: {
                    connect: [{ id: randomIntFromInterval(1, 3) }]
                }
            }
        });
    }

    console.log(`Seeding finished.`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });