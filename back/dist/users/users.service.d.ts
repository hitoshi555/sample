import { PrismaService } from '../prisma/prisma.service';
import { ResponseChangePassword, ResponseEditSelectClassroom, ResponseSelectedRooms, StudentDTO } from './users.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findOne(studentId: string): Promise<StudentDTO | null>;
    changePassword(studentId: string, password: string): Promise<ResponseChangePassword>;
    selectedClassRoom(studentId: string): Promise<ResponseSelectedRooms>;
    editSelectedClassRoom(id: number, studentId: string): Promise<ResponseEditSelectClassroom>;
}
