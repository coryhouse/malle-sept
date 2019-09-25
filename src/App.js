import React, { useState, useEffect } from "react";
import { getCourses } from "./api/courseApi";

function App() {
  // useState returns an array of 2 elements:
  // 1. variable that holds the state
  // 2. setter
  const [courses, setCourses] = useState([]);

  // Runs one time after the component renders
  useEffect(() => {
    getCourses().then(_courses => setCourses(_courses));
  }, []);

  function deleteCourse(id) {
    const newCourses = courses.filter(course => course.id !== id);
    setCourses(newCourses); // This tells React to re-render
  }

  function renderCourse(course) {
    return (
      <li key={course.id}>
        <button onClick={() => deleteCourse(course.id)}>Delete</button>{" "}
        {course.title}
      </li>
    );
  }

  return <ul>{courses.map(renderCourse)}</ul>;
}

export default App;
