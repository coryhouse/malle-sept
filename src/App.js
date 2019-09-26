import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./Home";
import Courses from "./Courses";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/courses">Courses</Link>
      </nav>
      <Route path="/" component={Home} exact />
      <Route path="/courses" component={Courses} />
    </>
  );
}

export default App;
