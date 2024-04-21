import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassRoomController } from './class-room/class-room.controller';
import { ClassRoomService } from './class-room/class-room.service';
import { ClassRoomModule } from './class-room/class-room.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { UsersController } from './users/users.controller';

@Module({
  imports: [
    ClassRoomModule,
    PrismaModule,
    AuthModule,
    UsersModule,
    ConfigModule.forRoot({
      // envファイルを組み込むために使用
      isGlobal: true,
    }),
  ],
  controllers: [AppController, ClassRoomController, UsersController],
  providers: [AppService, ClassRoomService, PrismaService],
})
export class AppModule {}
