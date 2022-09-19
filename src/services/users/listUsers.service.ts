import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";

const listUsersService = async () => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find({
    select: [
      "id",
      "username",
      "avatar",
      "nationality",
      "countryFlag",
      "created_at",
      "updated_at",
    ],
  });

  return users;
};

export default listUsersService;
