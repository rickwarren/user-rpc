import { IsEmail, IsNotEmpty } from 'class-validator';
import { ProfileDto } from './profile.dto.ts';
import * as protoscript from "protoscript";

export class UpdateUserDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  role: string;

  profile: ProfileDto;
  createdAt: protoscript.Timestamp;
  updatedAt: protoscript.Timestamp;
}
