import { Express } from "express";
import { countryFlagRoutes } from "./countryFlag.routes";
import { userRoutes } from "./user.routes";

export const appRoutes = (app: Express) => {
  app.use("/country", countryFlagRoutes());
  app.use("/user", userRoutes());
};
