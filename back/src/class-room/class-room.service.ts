import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ClassRoom, Prisma } from '@prisma/client';
import { ResponseAllClassRoom, ClassRoomDTO, ClassRoomWithTeachers } from './class-room.dto';
import { resourceLimits } from 'worker_threads';

@Injectable()
export class ClassRoomService {
    constructor(private prisma: PrismaService) { }

    async getAllClassRoom(): Promise<ResponseAllClassRoom> {
        const allClassRoom: ClassRoomDTO[] = await this.prisma.classRoom.findMany();

        return { classRooms: allClassRoom };
    }

    async getOneClassRoom(id: number): Promise<ClassRoomWithTeachers> {
        const result: ClassRoomWithTeachers = await this.prisma.classRoom.findUnique({
            where: { id },
            include: {
                teacher: true,
            },
        });

        console.log(result.name)

        return result;
    }
}
