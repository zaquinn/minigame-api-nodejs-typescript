import { Request, Response } from "express";
import listCountryFlagsService from "../../services/countryFlags/listCountryFlags.service";

const listCountryFlagsController = async (
  request: Request,
  response: Response
) => {
  try {
    const countryFlags = await listCountryFlagsService();
    return response.json(countryFlags);
  } catch (error) {
    if (error instanceof Error) {
      return response.status(400).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default listCountryFlagsController;
