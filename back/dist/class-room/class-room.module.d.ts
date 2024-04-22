import { ClassRoomController } from './class-room.controller';
import { ClassRoomService } from './class-room.service';
import { PrismaModule } from 'src/prisma/prisma.module';
export declare class ClassRoomModule {
    controllers: [ClassRoomController];
    providers: [ClassRoomService];
    imports: [PrismaModule];
}
