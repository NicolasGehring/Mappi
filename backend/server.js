import locationSchema from "./schema";
import locationResolver from "./resolvers";
import { makeExecutableSchema } from "graphql-tools";
import { ApolloServer } from "apollo-server";
import { connectDb } from "./db/db";
require("dotenv").config();

//Connect to Database Instance.
connectDb();

const schema = makeExecutableSchema({
  typeDefs: locationSchema,
  resolvers: locationResolver
});

const server = new ApolloServer({ schema });

const port = process.env.PORT || 4000;
const options = {
  port: port
};
// This `listen` method launches a web-server
server.listen(options).then(({ url }) => {
  console.log(`🚀 Server running at ${url}`);
});

