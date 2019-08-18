import locationSchema from "./schema";
import locationResolver from "./resolvers";
import { makeExecutableSchema } from "graphql-tools";
require("dotenv").config();
const { ApolloServer } = require("apollo-server");

console.log("location", locationSchema);

const schema = makeExecutableSchema({
  typeDefs: locationSchema,
  resolvers: locationResolver
});

const server = new ApolloServer({ schema });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
