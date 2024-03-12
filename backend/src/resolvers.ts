import {
  addComment,
  getComments,
  getComment,
} from "./services/commentServices.js";
import { addUser, getUser, getUsers } from "./services/userServices.js";
import { addPost, getPost, getPosts } from "./services/postServices.js";
export const resolvers = {
  Query: {
    getUsers: async () => {
      const data = await getUsers();
      return data;
    },
    getUser: async (
      _: any,
      { username, password }: { username: String; password: String }
    ) => {
      const user = await getUser(username, password);
      return user;
    },
    getComments: async (_: any, { id }: { id: number }) => {
      const data = await getComments(id);
      return data;
    },
    getComment: async (_: any, { id }: { id: number }) => {
      const data = await getComment(id);
      return data;
    },
    getPost: async (_: any, { id }: { id: number }) => {
      const data = await getPost(id);
      return data;
    },
    getPosts: async () => {
      const data = await getPosts();
      return data;
    },
  },
  Mutation: {
    addUser: async (
      _: any,
      {
        username,
        email,
        password,
      }: { username: String; email: String; password: String }
    ) => {
      try {
        const newUser = await addUser(username, password, email);
        return newUser;
      } catch (error) {
        console.error("Error adding user:", error);
        throw error;
      }
    },
    addPost: async (
      _: any,
      { content, userId }: { content: string; userId: number }
    ) => {
      try {
        const newPost = await addPost(content, userId);
        return newPost;
      } catch (error) {
        console.error("Error adding post:", error);
        throw error;
      }
    },
    addComment: async (
      _: any,
      {
        content,
        postId,
        userId,
      }: { content: string; postId: number; userId: number }
    ) => {
      try {
        const newComment = await addComment(content, postId, userId);
        return newComment;
      } catch (error) {
        console.error("Error adding Comment:", error);
        throw error;
      }
    },
  },
};
