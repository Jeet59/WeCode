import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BeforeInsert,
  ManyToOne,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { User } from "./User.js";
import { Comment } from "./Comment.js";

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  content: string = "";

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date = new Date();

  @ManyToOne(() => User, (user) => user.posts)
  author: User | null;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[] | null = null;

  constructor(user: User | null) {
    super();
    this.author = user;
  }

  @BeforeInsert()
  setCreatedAt() {
    this.createdAt = new Date();
  }
}
