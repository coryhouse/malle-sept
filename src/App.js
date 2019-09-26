import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Courses from "./Courses";

function App() {
  return (
    <>
      <Route path="/" component={Home} exact />
      <Route path="/courses" component={Courses} />
    </>
  );
}

export default App;
