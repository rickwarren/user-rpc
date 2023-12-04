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
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  ownerId: string;

  @Column()
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ nullable: true })
  dateOfBirth: string;

  @Column({ nullable: true })
  profession: string;

  @Column({ nullable: true })
  employer: string;

  @Column({ nullable: true })
  dateHired: string;

  @Column({ nullable: true })
  employmentStatus: string;

  @Column({ nullable: true })
  relationshipStatus: string;

  @Column({ nullable: true })
  profilePhoto: string;

  @Column({ nullable: true })
  bannerImage: string;

  @Column({ nullable: true })
  hometown: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  province: string;

  @Column({ nullable: true })
  country: string;

  @Column({ nullable: true })
  language: string;

  @Column({ nullable: true })
  mobilePhone: string;

  @Column({ nullable: true })
  visibility: string;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP(6)' })
  createdAt: protoscript.Timestamp;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)' })
  updatedAt: protoscript.Timestamp;
}
