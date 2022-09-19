import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { CountryFlag } from "../../entities/countryFlag.entity";
import { ICountryFlagCreate } from "../../interfaces/countryFlags";

const createCountryFlagService = async ({
  country,
  flag,
}: ICountryFlagCreate) => {
  const countryFlagRepository = AppDataSource.getRepository(CountryFlag);

  const countryFlag = new CountryFlag();
  countryFlag.country = country;
  countryFlag.flag = flag;

  countryFlagRepository.create(countryFlag);

  await countryFlagRepository.save(countryFlag);

  return countryFlag;
};

export default createCountryFlagService;
