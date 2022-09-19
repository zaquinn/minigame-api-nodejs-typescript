import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";

const listUsersService = async () => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  return users;
};

export default listUsersService;
