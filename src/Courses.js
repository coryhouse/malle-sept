import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as courseApi from "./api/courseApi";

function Courses() {
  // useState returns an array of 2 elements:
  // 1. variable that holds the state
  // 2. setter
  const [courses, setCourses] = useState([]);

  // Runs one time after the component renders
  useEffect(() => {
    courseApi.getCourses().then(_courses => setCourses(_courses));
  }, []);

  function deleteCourse(id) {
    courseApi.deleteCourse(id).then(() => {
      const newCourses = courses.filter(course => course.id !== id);
      setCourses(newCourses); // This tells React to re-render
    });
  }

  function renderCourse(course) {
    return (
      <li key={course.id}>
        <button onClick={() => deleteCourse(course.id)}>Delete</button>{" "}
        <Link to={"/course/" + course.id}>
          {course.title} - {course.category}
        </Link>
      </li>
    );
  }

  return (
    <>
      <Link to="/course">Add Course</Link>
      <ul>{courses.map(renderCourse)}</ul>
    </>
  );
}

export default Courses;
