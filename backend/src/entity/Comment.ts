import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
} from "typeorm";
import { User } from "./User.js";
import { Post } from "./Post.js";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  content: string = "";

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date = new Date();

  @ManyToOne(() => User, (user) => user.comments)
  author: User | null = null;

  @ManyToOne(() => Post, (post) => post.comments)
  post: Post | null = null;
}
