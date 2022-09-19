import updateUserService from "../../services/users/updateUser.service";
import { Request, Response } from "express";

export const updateUserController = async (
  request: Request,
  response: Response
) => {
  try {
    const id = request.userId;
    const { username, avatar, password, nationality } = request.body;

    const updatedUser = await updateUserService({
      avatar,
      id,
      nationality,
      password,
      username,
    });

    return response.status(200).json(updatedUser);
  } catch (error) {
    if (error instanceof Error) {
      return response.status(400).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default updateUserController;
