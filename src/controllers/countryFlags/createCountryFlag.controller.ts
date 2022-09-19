import createCountryFlagService from "../../services/countryFlags/createCountryFlag.service";
import { Request, Response } from "express";

const createCountryFlagController = async (
  request: Request,
  response: Response
) => {
  try {
    const { country, flag } = request.body;

    const createCountryFlag = await createCountryFlagService({ country, flag });

    return response.status(201).json(createCountryFlag);
  } catch (error) {
    if (error instanceof Error) {
      return response.status(400).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default createCountryFlagController;
