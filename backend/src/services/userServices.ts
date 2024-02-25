import { AppDataSource } from "../data-source.js";
import { User } from "../entity/User.js";

export async function getUsers() {
  const users = await AppDataSource.getRepository(User).find();
  return users;
}
export async function getUser(username: String, password: String) {
  const user = await AppDataSource.getRepository(User)
    .createQueryBuilder("user")
    .where("user.username = :username", { username: username })
    .andWhere("user.password = :password", { password: password })
    .getOne();
  return user;
}

export async function addUser(
  username: String,
  email: String,
  password: String
) {
  const user = {
    username: username,
    email: email,
    password: password,
  };
  await AppDataSource.getRepository(User).save(user);
  const newUser = await AppDataSource.getRepository(User).findBy(user);
  return newUser;
}
