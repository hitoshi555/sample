import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ClassRoom, Prisma } from '@prisma/client';
import { ResponseAllClassRoom, ClassRoomDTO, ClassRoomWithTeachers, ResponseSelectClassroom } from './class-room.dto';
import { resourceLimits } from 'worker_threads';

@Injectable()
export class ClassRoomService {
    constructor(private prisma: PrismaService) { }

    async getAllClassRoom(): Promise<ResponseAllClassRoom> {
        const allClassRoom: ClassRoomDTO[] = await this.prisma.classRoom.findMany();

        const a = await this.prisma.classRoom.findMany();
        console.log(a)
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

    async selectClassRoom(
        studentId,
        classroomId,
        period,
        timeSlot,
        weekday
    ): Promise<ResponseSelectClassroom> {
        console.log("selectClassRoom")

        const student = await this.prisma.student.findUnique({
            where: { studentId: studentId },
            include: { classRoom: true },
        });

        if (!student) {
            throw new Error("Student not found");
        }

        const isConflict = student.classRoom.some(classRoom =>
            classRoom.period === period &&
            classRoom.timeSlot === timeSlot &&
            classRoom.weekday === weekday
        );

        if (!isConflict) {
            await this.prisma.student.update({
                where: { studentId: studentId },
                data: {
                    classRoom: {
                        connect: { id: classroomId }
                    }
                }
            });
            console.log("selectClassRoom added end")
            return { resultText: "added" };
        } else {
            console.log("selectClassRoom scheduling conflict end")
            return { resultText: "scheduling conflict" };
        }
    }
}
