import React, { useState } from "react";

function App() {
  // useState returns an array of 2 elements:
  // 1. variable that holds the state
  // 2. setter
  const [courses, setCourses] = useState([
    { id: 1, title: "Java" },
    { id: 2, title: "React" },
    { id: 3, title: "C#" }
  ]);

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
