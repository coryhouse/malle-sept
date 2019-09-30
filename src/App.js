import React from "react";
import { Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Courses from "./Courses";
import ManageCourse from "./ManageCourse";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import ErrorBoundary from "./ErrorBoundary";
import Error from "./Error";

const activeStyle = {
  color: "orange"
};

function App() {
  return (
    <>
      <ToastContainer />
      <nav>
        <NavLink activeStyle={activeStyle} to="/" exact>
          Home
        </NavLink>{" "}
        |{" "}
        <NavLink activeStyle={activeStyle} to="/courses">
          Courses
        </NavLink>
      </nav>
      {/* React Router automatically passess history, location, and match on props */}
      <Route path="/" component={Home} exact />
      <Route path="/courses" component={Courses} />
      <ErrorBoundary>
        <Route path="/course/:id?" component={ManageCourse} />
      </ErrorBoundary>
      <Route path="/error" component={Error} />
    </>
  );
}

export default App;
