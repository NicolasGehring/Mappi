import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MapScreen from "./screens/MapScreen";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider } from "@material-ui/core/styles";
import { HttpLink } from "apollo-link-http";
import theme from "./styles/theme";
import IntroScreen from "./screens/IntroScreen";

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
          <Switch>
            <Route path="/" exact component={IntroScreen} />
            <Route path="/map" exact component={MapScreen} />
          </Switch>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
