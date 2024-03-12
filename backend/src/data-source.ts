import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User.js";
import { Post } from "./entity/Post.js";
import { Comment } from "./entity/Comment.js";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "sslpmmlp",
  database: "WeCode",
  synchronize: true,
  logging: false,
  entities: [User, Post, Comment],
  migrations: [],
  subscribers: [],
});
