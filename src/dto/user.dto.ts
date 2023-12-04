import { IsEmail, IsNotEmpty } from 'class-validator';
import { ProfileDto } from './profile.dto.ts';
import * as protoscript from "protoscript";

export class UserDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  password: string;

  role: string;

  profile: ProfileDto;
  createdAt: protoscript.Timestamp;
  updatedAt: protoscript.Timestamp;
}