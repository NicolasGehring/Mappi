import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MapScreen from "./screens/MapScreen";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider } from "@material-ui/core/styles";
import { HttpLink } from "apollo-link-http";
import theme from "./styles/theme";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://localhost:4000/",
});

const client = new ApolloClient({
  cache,
  link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router>
          <Route path="/" exact component={MapScreen} />
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
