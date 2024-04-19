import { ApiProperty } from '@nestjs/swagger';
import { Period, Position, TimeSlot } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ClassRoom {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    units: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(Period)
    period: Period;

    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(TimeSlot)
    timeSlot: TimeSlot;
}

export class Teacher {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(Position)
    position: Position;
}

export class ClassRoomWithTeachers {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    units: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(Period)
    period: Period;

    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(TimeSlot)
    timeSlot: TimeSlot;

    @ApiProperty()
    teacher: Teacher[] | null;
}

export class ClassRoomDTO {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    units: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(Period)
    period: Period;

    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(TimeSlot)
    timeSlot: TimeSlot;
}

export class ResponseAllClassRoom {
    @ApiProperty()
    classRooms: ClassRoom[]
}

export class ResponseOneClassRoom {
    @ApiProperty()
    classRoom: ClassRoomWithTeachers
}