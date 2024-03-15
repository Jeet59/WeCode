import { AppDataSource } from "../data-source.js";
import { User } from "../entity/User.js";

export async function getUsers() {
  const users = await AppDataSource.getRepository(User).find({
    relations: {
      posts: true,
      comments: true,
    },
  });
  return users;
}
export async function getUser(username: String, password: String) {
  const user = await AppDataSource.getRepository(User).findOne({
    where: {
      username: username,
      password: password,
    },
    relations: {
      posts: true,
      comments: true,
    },
  });
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
  const newUser = await AppDataSource.getRepository(User).findOne({
    where: {
      username: username,
      email: email,
      password: password,
    },
  });
  return newUser;
}
