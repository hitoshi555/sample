import { JwtService } from '@nestjs/jwt';
import { Student } from '@prisma/client';
import { UsersService } from 'src/users/users.service';
import { ResponseLogin } from './auth.dto';
export declare class AuthService {
    private jwtService;
    private usersService;
    constructor(jwtService: JwtService, usersService: UsersService);
    validateUser(studentId: string, password: string): Promise<Student | null>;
    login(user: Student): Promise<ResponseLogin>;
}
