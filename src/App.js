import React from "react";

function App() {
  const courses = [
    { id: 1, title: "Java" },
    { id: 2, title: "React" },
    { id: 3, title: "C#" }
  ];

  function renderCourse(course) {
    return <li>{course.title}</li>;
  }

  return <ul>{courses.map(renderCourse)}</ul>;
}

export default App;
