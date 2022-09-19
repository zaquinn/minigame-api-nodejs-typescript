import { Router } from "express";
import createCountryFlagController from "../controllers/countryFlags/createCountryFlag.controller";
import listCountryFlagsController from "../controllers/countryFlags/listCountryFlags.controller";
import verifyIfCountryFlagAlreadyExists from "../middlewares/verifyIfCountryFlagAlreadyExists.middleware";

const routes = Router();

export const countryFlagRoutes = () => {
  routes.post(
    "",
    verifyIfCountryFlagAlreadyExists,
    createCountryFlagController
  );
  routes.get("", listCountryFlagsController);

  return routes;
};
