import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

enum TimeSlot {
    FIRST = 'FIRST',
    SECOND = 'SECOND',
    THIRD = 'THIRD',
    FOURTH = 'FOURTH',
    FIFTH = 'FIFTH',
    SIXTH = 'SIXTH',
    SEVENTH = 'SEVENTH',
}

enum Period {
    SPRING = 'SPRING',
    AUTUMN = 'AUTUMN',
}

enum Position {
    PROFESSOR = "PROFESSOR",
    ASSOCIATEPROFESSOR = "ASSOCIATEPROFESSOR",
    LECTURER = "LECTURER",
    ASSISTANTPROFESSOR = "ASSISTANTPROFESSOR",
}

class ClassRoom {
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

class Teacher {
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

class ClassRoomWithTeachers {
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
    teacher: Teacher[];
}

export class ResponseAllClassRoom {
    @ApiProperty()
    classRooms: ClassRoom[]
}

export class ResponseOneClassRoom {
    @ApiProperty()
    classRoom: ClassRoom
}