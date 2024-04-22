import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { $Enums } from '@prisma/client';
import { ResponseLogin } from './auth/auth.dto';
declare class LoginRequest {
    id: number;
    studentId: string;
    name: string;
    department: $Enums.Department;
    password: string;
}
declare class RequestProfile {
    id: number;
    studentId: string;
    name: string;
    department: $Enums.Department;
}
export declare class AppController {
    private readonly appService;
    private readonly authService;
    constructor(appService: AppService, authService: AuthService);
    getHello(): string;
    getHash(): Promise<string>;
    login(req: LoginRequest): Promise<ResponseLogin>;
    getProfile(req: {
        user: RequestProfile;
    }): {
        user: RequestProfile;
    };
}
export {};
