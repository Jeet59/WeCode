import { Post } from "../entity/Post.js";
import { AppDataSource } from "../data-source.js";
import { Comment } from "../entity/Comment.js";
import { getPost } from "./postServices.js";
import { User } from "../entity/User.js";

export async function getComments(id: number): Promise<Comment[] | null> {
  const post = await getPost(id);
  if (!post) throw new Error("Post not FOund!!");
  if (!post.comments) {
    console.log("Post has no comments");
  }
  return post.comments;
}
export async function getComment(id: number) {
  const comment = await AppDataSource.getRepository(Comment).findOne({
    where: {
      id: id,
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
  });
  if (!post) {
    throw new Error("Post not found");
  }
  const user = await AppDataSource.getRepository(User).findOne({
    where: {
      id: userId,
    },
  });
  if (!user) throw new Error("No user associated with the comment!");
  const newComment: Comment = new Comment();
  newComment.content = content;
  newComment.createdAt = new Date();
  newComment.post = post;
  newComment.author = user;

  await AppDataSource.getRepository(Comment).save(newComment);

  return newComment;
}
