import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ClassRoomService } from './class-room.service';
import { ApiOkResponse } from '@nestjs/swagger';
import { ResponseAllClassRoom, ResponseOneClassRoom } from './class-room.dto';


@Controller('class-room')
export class ClassRoomController {
    constructor(private classRoomService: ClassRoomService) { }

    @Get()
    @ApiOkResponse({ type: ResponseAllClassRoom })
    getAllClassRoom() {
        console.log("getAllClassRoom")
        const response = this.classRoomService.getAllClassRoom();
        console.log("response", response)
        return response;
    }

    @Get(':id')
    @ApiOkResponse({ type: ResponseOneClassRoom })
    getOneClassRoom(@Param('id', ParseIntPipe) id: number) {
        return this.classRoomService.getOneClassRoom(id);
    }
}
