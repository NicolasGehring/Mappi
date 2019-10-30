import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    location(id: ID!): Location!
  }
  type Mutation {
    createLocation(text: String!): Location!
    deleteLocation(id: ID!): Boolean!
  }
  type Location {
    text: String!
    description: String!
  }
`;
