import { Request, Response } from "express";
import createUserService from "../../services/users/createUser.service";

const createUserController = async (request: Request, response: Response) => {
  try {
    const { username, password, avatar, nationality } = request.body;

    const createUser = await createUserService({
      username,
      avatar,
      password,
      nationality,
    });

    return response.status(201).json(createUser);
  } catch (error) {
    if (error instanceof Error) {
      return response.status(400).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default createUserController;
