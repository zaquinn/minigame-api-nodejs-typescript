import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IUserReturn, IUserUpdate } from "../../interfaces/users";
import bcrypt from "bcrypt";
import { CountryFlag } from "../../entities/countryFlag.entity";

const updateUserService = async ({
  id,
  avatar,
  nationality,
  username,
  password,
}: IUserUpdate) => {
  const userRepository = AppDataSource.getRepository(User);
  const countryFlagRepository = AppDataSource.getRepository(CountryFlag);

  const user = await userRepository.findOneBy({ id: id });

  if (!user) {
    throw new AppError(404, "User not found.");
  }

  if (nationality) {
    const countryFlag = await countryFlagRepository.findOneBy({
      country: nationality,
    });

    if (!countryFlag) {
      throw new AppError(
        400,
        "We could not find the specified nationality. Verify if your nationality is writed correctly and its in english."
      );
    }

    user.nationality = nationality;
    user.countryFlag = countryFlag;
  }

  user.username = username ? username : user.username;
  user.avatar = avatar ? avatar : user.avatar;
  user.password = password ? bcrypt.hashSync(password, 10) : user.password;

  await userRepository.save(user);

  const userReturn: IUserReturn = {
    id: user.id,
    username: user.username,
    avatar: user.avatar,
    countryFlag: user.countryFlag,
    nationality: user.nationality,
    created_at: user.created_at,
    updated_at: user.updated_at,
  };

  return userReturn;
};

export default updateUserService;
