import { CountryFlag } from "../../entities/countryFlag.entity";
import { AppDataSource } from "../../data-source";

const listCountryFlagsService = async () => {
  const countryFlagRepository = AppDataSource.getRepository(CountryFlag);

  const countryFlags = await countryFlagRepository.find();

  return countryFlags;
};

export default listCountryFlagsService;
