import { UsersService } from './users.service';
import { RequestChangePassword, RequestEditSelectClassroom, ResponseChangePassword, ResponseEditSelectClassroom, ResponseSelectedRooms } from './users.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    postChangePassword(body: RequestChangePassword): Promise<ResponseChangePassword>;
    getSelectedClassRoom(studentId: string): Promise<ResponseSelectedRooms>;
    postEditSelectedClassRoom(body: RequestEditSelectClassroom): Promise<ResponseEditSelectClassroom>;
}
