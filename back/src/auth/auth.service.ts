import bcrypt = require('bcryptjs');
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { Student } from '@prisma/client';
import { UsersService } from 'src/users/users.service';
import { ResponseLogin } from './auth.dto';
import { ApiOkResponse } from '@nestjs/swagger';

interface JWTPayload {
    studentId: Student['studentId'];
    name: Student['name'];
}

/**
 * @description Passportでは出来ない認証処理をするクラス
 */
@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService, private usersService: UsersService) { }

    // ユーザーを認証する
    async validateUser(studentId: string, password: string): Promise<Student | null> {
        console.log('sample')
        console.log("validateUser start")
        console.log('studentId', studentId)
        console.log('password', password)
        // console.log('id', id)
        const user = await this.usersService.findOne(studentId); // DBからUserを取得

        console.log('get user data:', user)
        // DBに保存されているpasswordはハッシュ化されている事を想定しているので、
        // bcryptなどを使ってパスワードを判定する
        if (user && bcrypt.compareSync(password, user.password.hashedPassword)) {
            console.log('Yes')
            const { password, ...result } = user; // パスワード情報を外部に出さないようにする

            return result;
        }

        console.log("validateUser end")
        return null;
    }

    // jwt tokenを返す
    async login(user: Student): Promise<ResponseLogin> {
        console.log('user', user)
        // jwtにつけるPayload情報
        const payload: JWTPayload = { studentId: user.studentId, name: user.name };

        const result = await this.jwtService.sign(payload)
        console.log('payload', payload)
        return {
            studentId: user.studentId,
            access_token: result,
        };
    }
}