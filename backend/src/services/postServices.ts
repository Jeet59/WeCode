import { AppDataSource } from "../data-source.js";
import { Post } from "../entity/Post.js";
import { User } from "../entity/User.js";

export async function getPosts() {
  const posts = await AppDataSource.getRepository(Post).find();
  return posts;
}

export async function getPost(id: number) {
  const Cpost = await AppDataSource.getRepository(Post).findOne({
    where: {
      id: id,
    },
  });
  return Cpost;
}
export async function addPost(content: string, userId: number): Promise<Post> {
  const user: User | null = await AppDataSource.getRepository(User).findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const newPost: Post = new Post();
  newPost.content = content;
  newPost.createdAt = new Date();
  newPost.author = user;

  await AppDataSource.getRepository(Post).save(newPost);

  return newPost;
}
