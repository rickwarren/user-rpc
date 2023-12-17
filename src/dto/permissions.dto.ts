import { IsNotEmpty } from 'class-validator';

export class PermissionsDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  permission: string;

  createdAt: string;
  updatedAt: string;
}
