import { Controller, Get, Post, UseGuards, Body } from '@nestjs/common';
import { AppService } from './app.service';
import bcrypt = require('bcryptjs');

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) { }

  @Get()
  getHello(): string {
    console.log('getHelloddd');
    return this.appService.getHello();
  }

  @Get('hash')
  async getHash() {
    console.log('hash');
    const student = { studentId: 'S001', name: 'Alice', password: 'password1' };
    const hashedPassword = await bcrypt.hash(student.password, 10);
    console.log(hashedPassword);
    return hashedPassword;
  }
}
