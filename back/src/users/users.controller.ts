import { Controller, UseGuards, Post, Body, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiBasicAuth, ApiBody, ApiOkResponse } from '@nestjs/swagger';
import {
    RequestChangePassword,
    RequestEditSelectClassroom,
    ResponseChangePassword,
    ResponseEditSelectClassroom,
    ResponseSelectedRooms,
} from './users.dto';

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
        const password = body.password;
        // 認証に成功したユーザーの情報を返す
        const response = await this.usersService.changePassword(
            studentId,
            password,
        );
        return response;
    }

    @Get('selected-class-rooms/:studentId')
    @ApiOkResponse({ type: ResponseSelectedRooms })
    async getSelectedClassRoom(@Param('studentId') studentId: string) {
        const result = await this.usersService.selectedClassRoom(studentId);
        return result;
    }

    @Post('edit-selected-class-rooms/')
    @ApiBody({ type: RequestEditSelectClassroom })
    @ApiOkResponse({ type: ResponseEditSelectClassroom })
    async postEditSelectedClassRoom(@Body() body: RequestEditSelectClassroom) {
        const classRoomId = body.id;
        const studentId = body.studentId;
        const result = await this.usersService.editSelectedClassRoom(
            classRoomId,
            studentId,
        );

        return result;
    }
}
