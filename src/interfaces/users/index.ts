import { CountryFlag } from "../../entities/countryFlag.entity";

export interface IUserCreate {
  username: string;
  password: string;
  avatar: string;
  nationality: string;
}

export interface IUserReturn {
  id: number;
  username: string;
  avatar: string;
  nationality: string;
  countryFlag: CountryFlag;
  created_at: Date;
  updated_at: Date;
}

export interface IUserLogin {
  username: string;
  password: string;
}

export interface IUserUpdate {
  id: number;
  username: string;
  avatar: string;
  nationality: string;
  password: string;
}
