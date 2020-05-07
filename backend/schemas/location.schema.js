import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    location(long: Float!, lat: Float!): [Location]!
  }
  type Mutation {
    createLocation(name: String!, long: Float!, lat: Float!): Location!
    deleteLocation(id: ID!): Boolean!
  }
  type Location {
    id: ID!
    name: String!
    long: Float!
    lat: Float!
  }
`;
