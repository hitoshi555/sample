import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassRoomController } from './class-room/class-room.controller';
import { ClassRoomService } from './class-room/class-room.service';
import { ClassRoomModule } from './class-room/class-room.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ClassRoomModule, PrismaModule],
  controllers: [AppController, ClassRoomController],
  providers: [AppService, ClassRoomService, PrismaService],
})
export class AppModule { }
