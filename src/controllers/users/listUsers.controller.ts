import { Request, Response } from "express";
import listUsersService from "../../services/users/listUsers.service";

const listUsersController = async (request: Request, response: Response) => {
  try {
    const users = await listUsersService();
    return response.json(users);
  } catch (error) {
    if (error instanceof Error) {
      return response.status(400).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default listUsersController;
