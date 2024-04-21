import { ApiProperty } from '@nestjs/swagger';
import { Department, Password, Period, Position, TimeSlot } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';


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