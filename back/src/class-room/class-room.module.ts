import { Module } from '@nestjs/common';
import { ClassRoomController } from './class-room.controller';
import { ClassRoomService } from './class-room.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({})
export class ClassRoomModule {
    controllers: [ClassRoomController]
    providers: [ClassRoomService]
    imports: [PrismaModule]
}