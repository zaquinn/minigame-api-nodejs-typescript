import deleteUserService from "../../services/users/deleteUser.service";
import { Request, Response } from "express";

export const deleteUserController = async (
  request: Request,
  response: Response
) => {
  try {
    const id = request.userId;

    const deletedUser = await deleteUserService(id);

    return response.status(204).send();
  } catch (error) {
    if (error instanceof Error) {
      return response.status(400).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default deleteUserController;
