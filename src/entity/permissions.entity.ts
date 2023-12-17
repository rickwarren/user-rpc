import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { entity } from '@deepkit/type';

@Entity()
@entity.name('permissions')
export class Permissions {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column()
  permission: string;
  
  @CreateDateColumn({ type: 'timestamptz', default: () => 'NOW()' })
  createdAt: string;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'NOW()', onUpdate: 'NOW()' })
  updatedAt: string;
}
