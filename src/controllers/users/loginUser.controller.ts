import { Request, Response } from "express";
import loginUserService from "../../services/users/loginUser.service";

export const loginUserController = async (
  request: Request,
  response: Response
) => {
  try {
    const { username, password } = request.body;
    const token = await loginUserService({ username, password });

    return response.status(200).json({ token });
  } catch (error) {
    if (error instanceof Error) {
      return response.status(400).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default loginUserController;
