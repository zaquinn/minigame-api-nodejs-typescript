import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { CountryFlag } from "./countryFlag.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn("increment")
  readonly id: number;

  @Column()
  username: string;

  @Column({ select: false })
  password: string;

  @Column()
  avatar: string;

  @Column()
  nationality: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne((type) => CountryFlag, (countryFlag) => countryFlag.users, {
    eager: true,
  })
  countryFlag: CountryFlag;
}
