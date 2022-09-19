import { IUserLogin } from "../../interfaces/users";
import { AppDataSource } from "../../data-source";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors/appError";
import { User } from "../../entities/user.entity";

const loginUserService = async ({ username, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find({
    select: ["id", "username", "password"],
  });

  const account = users.find((user) => user.username === username);
  if (!account || !bcrypt.compareSync(password, account.password)!) {
    throw new AppError(403, "Invalid credentials.");
  }

  const token = jwt.sign({ id: account.id }, String(process.env.SECRET_KEY), {
    expiresIn: "1d",
  });

  return token;
};

export default loginUserService;
