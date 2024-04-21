import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ResponseLogin {
  @ApiProperty()
  @IsString()
  access_token: string;

  @ApiProperty()
  @IsString()
  studentId: string;
}
