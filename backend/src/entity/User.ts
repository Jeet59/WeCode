import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { Post } from "./Post.js";
import { Comment } from "./Comment.js";
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  username: String = "Username";

  @Column()
  email: String = "Email";

  @Column()
  password: String = "Password";

  @OneToMany(() => Post, (post) => post.author, {
    eager: true,
  })
  posts: Post[] | null = null;

  @OneToMany(() => Comment, (comment) => comment.author, {
    eager: true,
  })
  comments: Comment[] | null = null;
}
