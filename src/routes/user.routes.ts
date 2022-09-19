import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import listUsersController from "../controllers/users/listUsers.controller";
import verifyIfUserAlreadyExists from "../middlewares/verifyIfUserAlreadyExists.middleware";

const routes = Router();

export const userRoutes = () => {
  routes.post("", verifyIfUserAlreadyExists, createUserController);
  routes.get("", listUsersController);
  return routes;
};
