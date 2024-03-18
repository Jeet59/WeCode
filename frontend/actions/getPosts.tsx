import { gql } from "@apollo/client";
import { getClient } from "../app/ApolloClient";

export interface Post {
  id: string;
  content: string;
  createdAt: string;
  author: {
    username: string;
  };
  comments: Comment[];
}

export interface Comment {
  id: string;
  content: string;
  createdAt: string;
}

export default async function getPosts(): Promise<Post[]> {
  let data: Post[] = [];
  try {
    const response = await getClient().query({
      query: gql`
        query Query {
          getPosts {
            id
            content
            createdAt
            author {
              username
            }
            comments {
              id
              content
              createdAt
            }
          }
        }
      `,
    });
    data = response.data.getPosts;
  } catch (error) {
    console.log(error);
  }
  return data;
}
