import { PrismaService } from '../prisma/prisma.service';
import { ResponseAllClassRoom, ClassRoomWithTeachers, ResponseSelectClassroom } from './class-room.dto';
export declare class ClassRoomService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllClassRoom(): Promise<ResponseAllClassRoom>;
    getOneClassRoom(id: number): Promise<ClassRoomWithTeachers>;
    selectClassRoom(studentId: any, classroomId: any, period: any, timeSlot: any, weekday: any): Promise<ResponseSelectClassroom>;
}
