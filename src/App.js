import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MapScreen from "./screens/MapScreen";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";

import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://localhost:4000/",
});

const client = new ApolloClient({
  cache,
  link,
});

function App() {
  client
    .query({
      query: gql`
        query location {
          location(long: 1.5, lat: 1.2) {
            name
          }
        }
      `,
    })
    .then((result) => console.log("test", result));
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route path="/" exact component={MapScreen} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
