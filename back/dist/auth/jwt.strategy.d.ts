import { Strategy as BaseJwtStrategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Student } from '@prisma/client';
interface JWTPayload {
    studentId: Student['studentId'];
    name: Student['name'];
}
declare const JwtStrategy_base: new (...args: any[]) => BaseJwtStrategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly configService;
    constructor(configService: ConfigService);
    validate(payload: JWTPayload): Promise<JWTPayload>;
}
export {};
