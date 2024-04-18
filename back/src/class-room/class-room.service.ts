import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ClassRoom, Prisma } from '@prisma/client';

@Injectable()
export class ClassRoomService {
    constructor(private prisma: PrismaService) { }

    async getAllClassRoom(): Promise<ClassRoom[]> {
        return this.prisma.classRoom.findMany();
    }

    async getOneClassRoom(id: number) {
        return this.prisma.classRoom.findUnique({
            where: { id },
            include: {
                teacher: true,
            },
        });
    }
}
