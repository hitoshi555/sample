import { ApiProperty } from '@nestjs/swagger';
import { Period, Position, TimeSlot } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ResponseLogin {
    @ApiProperty()
    @IsString()
    access_token: string;

    @ApiProperty()
    @IsString()
    studentId: string;
}