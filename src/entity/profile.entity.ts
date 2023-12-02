import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as protoscript from "protoscript";

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ownerId: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  dateOfBirth: string;

  @Column()
  profession: string;

  @Column()
  employer: string;

  @Column()
  dateHired: string;

  @Column()
  employmentStatus: string;

  @Column()
  relationshipStatus: string;

  @Column()
  profilePhoto: string;

  @Column()
  bannerImage: string;

  @Column()
  hometown: string;

  @Column()
  city: string;

  @Column()
  province: string;

  @Column()
  country: string;

  @Column()
  language: string;

  @Column()
  mobilePhone: string;

  visibility: string;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP(6)' })
  createdAt: protoscript.Timestamp;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)' })
  updatedAt: protoscript.Timestamp;
}
