import { IsNotEmpty } from 'class-validator';

export class UpdatePermissionsDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  permission: string;

  createdAt: string;
  updatedAt: string;
}
