import styles from "./page.module.css";
import { redirect } from "next/navigation";
import { getClient } from "./ApolloClient";
import { gql } from "@apollo/client";
export default function Login() {
  async function getUser(username: String, password: String) {
    try {
      const { data } = await getClient().query({
        query: gql`
          query Query($username: String, $password: String) {
            user(username: $username, password: $password) {
              username
              password
            }
          }
        `,
        variables: {
          username,
          password,
        },
      });

      if (data.user) {
        redirect("/home");
      } else {
        console.log("No such user");
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }
  return (
    <div className={styles.loginPage}>
      <div className={styles.WeCode}>WeCode</div>
      <div className={styles.loginFormBox}>
        <form className={styles.loginForm}>
          <input type="text" name="username" placeholder="username" />
          <input type="password" name="password" placeholder="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
