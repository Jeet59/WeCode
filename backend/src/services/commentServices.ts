import { Post } from "../entity/Post.js";
import { AppDataSource } from "../data-source.js";
import { Comment } from "../entity/Comment.js";
import { getPost } from "./postServices.js";
import { User } from "../entity/User.js";

export async function getComments(id: number) {
  const post = await AppDataSource.getRepository(Post).findOne({
    where: {
      id: id,
    },
    relations: {
      author: true,
      comments: true,
    },
  });
  if (!post) throw new Error("Post not Found!!");
  const comments = await AppDataSource.getRepository(Comment).find({
    where: {
      post: post,
    },
    relations: {
      author: true,
      post: true,
    },
  });
  if (!comments) {
    console.log("Post has no comments");
  }
  return comments;
}
export async function getComment(id: number) {
  const comment = await AppDataSource.getRepository(Comment).findOne({
    where: {
      id: id,
    },
    relations: {
      author: true,
      post: true,
    },
  });
  return comment;
}

export async function addComment(
  content: string,
  postId: number,
  userId: number
) {
  const post: Post | null = await AppDataSource.getRepository(Post).findOne({
    where: {
      id: postId,
    },
    relations: {
      author: true,
      comments: true,
    },
  });
  if (!post) {
    throw new Error("Post not found");
  }
  const user = await AppDataSource.getRepository(User).findOne({
    where: {
      id: userId,
    },
    relations: {
      posts: true,
      comments: true,
    },
  });
  if (!user) throw new Error("No user associated with the comment!");
  const newComment: Comment = new Comment(user, post);
  newComment.content = content;
  newComment.createdAt = new Date();
  newComment.post = post;
  newComment.author = user;
  if (!user.comments) user.comments = [newComment];
  else user.comments.push(newComment);

  await AppDataSource.getRepository(Comment).save(newComment);
  await AppDataSource.getRepository(User).save(user);

  return newComment;
}
