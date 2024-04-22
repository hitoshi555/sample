import { Period, Position, TimeSlot, WeekDay } from '@prisma/client';
export declare class ClassRoom {
    id: number;
    name: string;
    description: string;
    units: number;
    period: Period;
    timeSlot: TimeSlot;
    weekday: WeekDay;
}
export declare class Teacher {
    id: number;
    name: string;
    position: Position;
}
export declare class ClassRoomWithTeachers {
    id: number;
    name: string;
    description: string;
    units: number;
    period: Period;
    timeSlot: TimeSlot;
    weekday: WeekDay;
    teacher: Teacher[] | null;
}
export declare class ClassRoomDTO {
    id: number;
    name: string;
    description: string;
    units: number;
    period: Period;
    timeSlot: TimeSlot;
    weekday: WeekDay;
}
export declare class ResponseAllClassRoom {
    classRooms: ClassRoom[];
}
export declare class ResponseOneClassRoom {
    classRoom: ClassRoomWithTeachers;
}
export declare class RequestSelectClassroom {
    id: number;
    studentId: string;
    period: Period;
    timeSlot: TimeSlot;
    weekday: WeekDay;
}
export declare class ResponseSelectClassroom {
    resultText: string;
}
