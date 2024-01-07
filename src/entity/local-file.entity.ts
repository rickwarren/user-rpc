
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Photo } from './photo.entity';
 
@Entity()
export class LocalFile {
  @PrimaryGeneratedColumn('uuid')
  id: string;
 
  @Column()
  filename: string;
 
  @Column()
  path: string;
 
  @Column()
  mimetype: string;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'NOW()' })
  createdAt: string;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'NOW()', onUpdate: 'NOW()' })
  updatedAt: string;
}
