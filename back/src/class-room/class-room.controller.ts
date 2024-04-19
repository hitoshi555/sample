import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ClassRoomService } from './class-room.service';
import { ApiOkResponse } from '@nestjs/swagger';
import { ResponseAllClassRoom, ResponseOneClassRoom } from './class-room.dto';


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
}
