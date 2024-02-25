import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { AppDataSource } from "./data-source.js";
import { readFileSync } from "fs";
import { resolvers } from "./resolvers.js";
import "reflect-metadata";
import dotenv from "dotenv";

dotenv.config();

const typeDefs = readFileSync("src/schema.graphql", { encoding: "utf-8" });

const app = express();
const httpServer = http.createServer(app);

async function startApollo() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  app.use(cors(), bodyParser.json(), expressMiddleware(server));
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, () => resolve())
  );
}

await AppDataSource.initialize()
  .catch((error) => console.log(error))
  .then(() => startApollo())
  .then(() => console.log(`🚀 Server ready at http://localhost:4000`));
