import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class CountryFlag {
  @PrimaryGeneratedColumn("increment")
  readonly id: number;

  @Column()
  country: string;

  @Column()
  flag: string;

  @OneToMany((type) => User, (users) => users.countryFlag)
  users?: User[];
}
