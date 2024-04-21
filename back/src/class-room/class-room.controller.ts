import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { ClassRoomService } from './class-room.service';
import { ApiBasicAuth, ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { RequestSelectClassroom, ResponseAllClassRoom, ResponseOneClassRoom, ResponseSelectClassroom } from './class-room.dto';
import { AuthGuard } from '@nestjs/passport';


@Controller('class-room')
export class ClassRoomController {
    constructor(private classRoomService: ClassRoomService) { }

    @Get()
    @ApiOkResponse({ type: ResponseAllClassRoom })
    async getAllClassRoom() {
        console.log("getAllClassRoom")
        const response = await this.classRoomService.getAllClassRoom();
        console.log("response", response)
        return response;
    }

    @Get(':id')
    @ApiOkResponse({ type: ResponseOneClassRoom })
    async getOneClassRoom(@Param('id', ParseIntPipe) id: number) {
        console.log("getOneClassRoom")
        console.log("id", id)
        const response = await this.classRoomService.getOneClassRoom(id);
        console.log("response", response)
        return { classRoom: response };
    }

    @UseGuards(AuthGuard('jwt'))
    @ApiBasicAuth()
    @ApiBody({ type: RequestSelectClassroom })
    @ApiOkResponse({ type: ResponseSelectClassroom })
    @Post('select-class-room')
    async selectClassRoom(@Body() body: RequestSelectClassroom) {
        console.log('select-class-room')
        const studentId = body.studentId;
        const classroomId = body.id;
        const period = body.period
        const timeSlot = body.timeSlot
        const weekday = body.weekday

        const response = await this.classRoomService.selectClassRoom(
            studentId,
            classroomId,
            period,
            timeSlot,
            weekday
        );

        console.log('select-class-room end')
        return response;
    }
}
