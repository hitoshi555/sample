import { Strategy as BaseLocalStrategy } from 'passport-local';
import { AuthService } from './auth.service';
import { Student } from '@prisma/client';
declare const LocalStrategy_base: new (...args: any[]) => BaseLocalStrategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(studentId: string, password: string): Promise<Student>;
}
export {};
