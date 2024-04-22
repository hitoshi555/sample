import { Department, Password } from '@prisma/client';
import { ClassRoomDTO } from 'src/class-room/class-room.dto';
export declare class StudentDTO {
    id: number;
    studentId: string;
    name: string;
    department: Department;
    password: Password | null;
}
export declare class RequestChangePassword {
    studentId: string;
    password: string;
}
export declare class ResponseChangePassword {
    studentId: string;
}
export declare class RequestSelectedRooms {
    studentId: string;
}
export declare class ResponseSelectedRooms {
    classrooms: ClassRoomDTO[];
}
export declare class RequestEditSelectClassroom {
    id: number;
    studentId: string;
}
export declare class ResponseEditSelectClassroom {
    resultText: string;
}
