"use server";
import { redirect } from "next/navigation";
import { getClient } from "../ApolloClient";
import { gql } from "@apollo/client";
import { cookies } from "next/headers";

interface User {
  username: string;
  password: string;
}

export default async function login(formData: FormData) {
  const user: User = {
    username: formData.get("username") as string,
    password: formData.get("password") as string,
  };

  let data;

  try {
    const response = await getClient().query({
      query: gql`
        query Query($username: String, $password: String) {
          user(username: $username, password: $password) {
            username
            password
          }
        }
      `,
      variables: {
        username: user.username,
        password: user.password,
      },
    });

    data = response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    return;
  }

  if (!data.user) {
    console.log("User Not Found!!");
  } else {
    cookies().set("username", data.user.username);
    redirect("/home");
  }
}
