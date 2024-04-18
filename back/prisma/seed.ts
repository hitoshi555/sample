import { PrismaClient, Prisma, ClassRoom } from '@prisma/client';
const prisma = new PrismaClient();

// モデル投入用のデータ定義
const classRoomData: ClassRoom[] = [
    {
        id: 1,
        name: "数学入門",
        description: "基本的な数学の概念を紹介する入門コースです。",
        units: 3,
        period: "春",
        timeSlot: "9:00 - 10:30"
    },
    {
        id: 2,
        name: "物理学中級",
        description: "力学および電磁気学をカバーする中級物理学コース。",
        units: 4,
        period: "秋",
        timeSlot: "11:00 - 12:30"
    },
    {
        id: 3,
        name: "化学入門",
        description: "化学反応と実験技術の紹介。",
        units: 3,
        period: "春",
        timeSlot: "13:00 - 14:30"
    },
    {
        id: 4,
        name: "生物学上級",
        description: "細胞および分子生物学の上級トピックス。",
        units: 4,
        period: "春",
        timeSlot: "15:00 - 16:30"
    },
    {
        id: 5,
        name: "哲学入門",
        description: "基本的な哲学的問いについて探求するコース。",
        units: 2,
        period: "秋",
        timeSlot: "17:00 - 18:30"
    }
];

const doSeed = async () => {
    const posts = [];
    for (const classRoom of classRoomData) {
        const createPosts = prisma.classRoom.create({
            data: classRoom,
        });
        posts.push(createPosts);
    }
    return await prisma.$transaction(posts);
};

const main = async () => {
    console.log(`Start seeding ...`);

    await doSeed();

    console.log(`Seeding finished.`);
};

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });