import { IsEmail, IsNotEmpty } from 'class-validator';
import { ProfileDto } from './profile.dto.ts';

export class UserDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  password: string;

  role: string;

  profile: ProfileDto;

  permissions: string;

  urlString: string;

  createdAt: string;
  updatedAt: string;
}
