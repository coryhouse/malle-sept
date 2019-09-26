import React from "react";
import { Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Courses from "./Courses";

const activeStyle = {
  color: "orange"
};

function App() {
  return (
    <>
      <nav>
        <NavLink activeStyle={activeStyle} to="/" exact>
          Home
        </NavLink>{" "}
        |{" "}
        <NavLink activeStyle={activeStyle} to="/courses">
          Courses
        </NavLink>
      </nav>
      <Route path="/" component={Home} exact />
      <Route path="/courses" component={Courses} />
    </>
  );
}

export default App;
