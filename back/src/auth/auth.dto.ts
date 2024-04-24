import { ApiProperty } from '@nestjs/swagger';
import { Department } from '@prisma/client';
import { IsEnum, IsNumber, IsString } from 'class-validator';

export class ResponseLogin {
  @ApiProperty()
  @IsString()
  access_token: string;

  @ApiProperty()
  @IsString()
  studentId: string;
}



export class RequestLogin {
  @ApiProperty()
  @IsString()
  studentId: string;

  @ApiProperty()
  @IsString()
  password: string;
}

export class ResponseStudent {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsString()
  studentId: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsEnum(Department)
  department: Department;
}

export class RequestProfile {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsString()
  studentId: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsEnum(Department)
  department: Department;
}