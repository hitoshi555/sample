import { ApiProperty } from '@nestjs/swagger';
import { Department, Password, Period, Position, TimeSlot } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ClassRoomDTO } from 'src/class-room/class-room.dto';


export class StudentDTO {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    studentId: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(Department)
    department: Department;

    @ApiProperty()
    password: Password | null;
}

export class RequestChangePassword {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    studentId: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password: string;
}

export class ResponseChangePassword {
    @ApiProperty()
    studentId: string
}

export class RequestSelectedRooms {
    @ApiProperty()
    studentId: string
}

export class ResponseSelectedRooms {
    classrooms: ClassRoomDTO[]
}

export class RequestEditSelectClassroom {
    @ApiProperty()
    id: number

    @ApiProperty()
    studentId: string
}

export class ResponseEditSelectClassroom {
    @ApiProperty()
    resultText: string;
}