import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ClassRoom, Prisma } from '@prisma/client';
import { ResponseAllClassRoom, ClassRoomDTO } from './class-room.dto';

@Injectable()
export class ClassRoomService {
    constructor(private prisma: PrismaService) { }

    async getAllClassRoom(): Promise<ResponseAllClassRoom> {
        const allClassRoom: ClassRoomDTO[] = await this.prisma.classRoom.findMany();
        const result = { classRooms: [{ id: 1, }] }
        return { classRooms: allClassRoom };
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
