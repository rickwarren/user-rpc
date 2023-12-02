import { IsEmail, IsNotEmpty } from 'class-validator';
import { UserRole } from '../enum/user-role.enum.ts';
import { ProfileDto } from './profile.dto.ts';

export class CreateUserDto {
  id: number;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  role: string;
}
