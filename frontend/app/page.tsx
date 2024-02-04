import { gql } from "@apollo/client";
import { getClient } from "./ApolloClient";
export default async function Home() {
  const userQuery = gql`
    query Query {
      hello
    }
  `;
  const { data } = await getClient().query({ query: userQuery });
  return (
    <main>
      <div>Hello {data.hello}</div>
    </main>
  );
}
