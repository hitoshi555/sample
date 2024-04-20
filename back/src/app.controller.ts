import { Controller, Get, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AppService } from './app.service';
import bcrypt = require('bcryptjs');
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { $Enums, Student } from '@prisma/client';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { ResponseLogin } from './auth/auth.dto';

class LoginRequest {
  id: number;
  studentId: string;
  name: string;
  department: $Enums.Department
  password: string;
}

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService
  ) { }

  @Get()
  getHello(): string {
    console.log("getHello")
    return this.appService.getHello();
  }

  @Get("hash")
  async getHash() {
    console.log("hash")
    const student =
      { studentId: 'S001', name: 'Alice', password: 'password1' };
    const hashedPassword = await bcrypt.hash(student.password, 10);
    console.log(hashedPassword)
    return hashedPassword;
  }

  @UseGuards(AuthGuard('local')) // passport-local戦略を付与する
  @Post('login')
  @ApiOkResponse({ type: ResponseLogin })
  @ApiBody({ type: LoginRequest })
  async login(@Body() req: LoginRequest) {
    console.log("login start")
    console.log("login req:", req)
    // LocalStrategy.validate()で認証して返した値がreq.userに入ってる
    const user = req;
    console.log("login user:", user)
    // JwtToken を返す
    console.log("login end")
    const result = this.authService.login(user);
    return result;
  }

  /**
   * @description JWT認証を用いたサンプルAPI
   */
  @UseGuards(AuthGuard('jwt')) // passport-jwt戦略を付与する
  @Get('profile')
  getProfile(@Request() req: { user: Student }) {
    console.log("profile start")
    // JwtStrategy.validate()で認証して返した値がreq.userに入ってる
    const user = req.user;

    console.log("user:", user)
    console.log("profile end")
    // 認証に成功したユーザーの情報を返す
    return req.user;
  }
}
