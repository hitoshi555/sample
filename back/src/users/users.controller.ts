import { Controller, UseGuards, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiBasicAuth, ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { RequestChangePassword, ResponseChangePassword } from './users.dto';

@UseGuards(AuthGuard('jwt'))
@ApiBasicAuth()
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }


    @Post('change-password')
    @ApiBody({ type: RequestChangePassword })
    @ApiOkResponse({ type: ResponseChangePassword })
    async postChangePassword(@Body() body: RequestChangePassword) {
        const studentId = body.studentId;
        const password = body.password
        console.log("studentId:", studentId)
        console.log("password:", password)
        console.log("profile end")
        // 認証に成功したユーザーの情報を返す
        const response = await this.usersService.changePassword(studentId, password);
        return response;
    }
}
