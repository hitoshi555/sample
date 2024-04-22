import { ClassRoomService } from './class-room.service';
import { RequestSelectClassroom, ResponseAllClassRoom, ResponseSelectClassroom } from './class-room.dto';
export declare class ClassRoomController {
    private classRoomService;
    constructor(classRoomService: ClassRoomService);
    getAllClassRoom(): Promise<ResponseAllClassRoom>;
    getOneClassRoom(id: number): Promise<{
        classRoom: import("./class-room.dto").ClassRoomWithTeachers;
    }>;
    selectClassRoom(body: RequestSelectClassroom): Promise<ResponseSelectClassroom>;
}
