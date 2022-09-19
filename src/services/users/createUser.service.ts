import { User } from "../../entities/user.entity";
import { CountryFlag } from "../../entities/countryFlag.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { IUserCreate, IUserReturn } from "../../interfaces/users";
import bcrypt from "bcrypt";

const createUserService = async ({
  username,
  password,
  avatar,
  nationality,
}: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);
  const countryFlagRepository = AppDataSource.getRepository(CountryFlag);

  const countryFlag = await countryFlagRepository.findOneBy({
    country: nationality,
  });

  if (!countryFlag) {
    throw new AppError(
      400,
      "We could not find the specified nationality. Verify if your nationality is writed correctly and its in english."
    );
  }

  const user = new User();
  user.username = username;
  user.password = bcrypt.hashSync(password, 10);
  user.avatar = avatar;
  user.nationality = nationality;
  user.countryFlag = countryFlag;

  userRepository.create(user);
  await userRepository.save(user);

  return user;
};

export default createUserService;
