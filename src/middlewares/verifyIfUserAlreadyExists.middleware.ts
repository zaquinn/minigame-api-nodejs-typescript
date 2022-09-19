import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/appError";

const verifyIfUserAlreadyExists = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);

  const verifyIfUserAlreadyExists = await userRepository.findOneBy({
    username: request.body.username,
  });

  if (verifyIfUserAlreadyExists) {
    return response.status(409).json({ message: "User already exists" });
  }

  next();
};

export default verifyIfUserAlreadyExists;
