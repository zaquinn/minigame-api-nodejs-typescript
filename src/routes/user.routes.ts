import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";
import listUsersController from "../controllers/users/listUsers.controller";
import loginUserController from "../controllers/users/loginUser.controller";
import updateUserController from "../controllers/users/updateUser.controller";
import authorizationToken from "../middlewares/authorizationToken.middleware";
import verifyIfUserAlreadyExists from "../middlewares/verifyIfUserAlreadyExists.middleware";

const routes = Router();

export const userRoutes = () => {
  routes.post("", verifyIfUserAlreadyExists, createUserController);
  routes.get("", listUsersController);
  routes.post("/login", loginUserController);
  routes.patch("/update", authorizationToken, updateUserController);
  routes.delete("/delete", authorizationToken, deleteUserController);
  return routes;
};
