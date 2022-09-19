import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { CountryFlag } from "../entities/countryFlag.entity";

const verifyIfCountryFlagAlreadyExists = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const countryFlagRepository = AppDataSource.getRepository(CountryFlag);

  const countryFlags = await countryFlagRepository.find();

  const countryFlagAlreadyExists = countryFlags.find(
    (countryFlag) => countryFlag.country === request.body.country
  );

  if (countryFlagAlreadyExists) {
    return response.status(409).json({ message: "Country already exists" });
  }

  next();
};

export default verifyIfCountryFlagAlreadyExists;
