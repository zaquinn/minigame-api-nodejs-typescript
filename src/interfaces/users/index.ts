import { CountryFlag } from "../../entities/countryFlag.entity";

export interface IUserCreate {
  username: string;
  password: string;
  avatar: string;
  nationality: string;
}

export interface IUserReturn {
  username: string;
  avatar: string;
  nationality: string;
  countryFlag: CountryFlag;
}
