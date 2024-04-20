// import先が'passport-jwt'では無い事に注意！
import { Strategy as BaseLocalStrategy } from 'passport-local';

import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Student } from '@prisma/client';

/**
 * @description usernameとpasswordを使った認証処理を行うクラス
 */
@Injectable()
export class LocalStrategy extends PassportStrategy(BaseLocalStrategy) {
    constructor(private authService: AuthService) {
        super({ usernameField: "studentId", passwordField: 'password' })
    }

    // passport-localは、デフォルトで username と password をパラメーターで受け取る
    async validate(studentId: string, password: string): Promise<Student> {
        console.log("validate user")
        console.log("studentId", studentId)
        console.log("pass", password)

        // 認証して結果を受け取る
        const user = await this.authService.validateUser(studentId, password);

        console.log("user", user)
        if (!user) {
            throw new UnauthorizedException(); // 認証失敗
        }

        return user;
    }
}