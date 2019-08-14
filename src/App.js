import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MapScreen from "./screens/MapScreen";

function App() {
  return (
    <Router>
      <Route path="/" exact component={MapScreen} />
    </Router>
  );
}

export default App;
