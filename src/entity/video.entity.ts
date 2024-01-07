
import { 
  Column, 
  Entity, 
  PrimaryGeneratedColumn, 
} from 'typeorm';

@Entity()
export class Video {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;
 
  @Column()
  localFileId: string;
}
