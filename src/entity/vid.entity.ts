
import { 
  Column, 
  Entity, 
  PrimaryGeneratedColumn, 
} from 'typeorm';

@Entity()
export class Vid {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;
 
  @Column()
  localFileId: string;

  @Column()
  views: number;
}
