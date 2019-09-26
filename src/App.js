import React, { useState, useEffect } from "react";
import * as courseApi from "./api/courseApi";

const newCourse = {
  id: null,
  title: ""
};

function App() {
  // useState returns an array of 2 elements:
  // 1. variable that holds the state
  // 2. setter
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState(newCourse);

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
        {course.title}
      </li>
    );
  }

  function saveCourse(event) {
    event.preventDefault(); // don't post back
    courseApi.addCourse(course).then(savedCourse => {
      setCourses([...courses, savedCourse]); // copy courses array, and add saved course
    });
  }

  function handleTitleChange(event) {
    const newCourse = { ...course };
    newCourse.title = event.target.value;
    setCourse(newCourse);
  }

  return (
    <>
      <form onSubmit={saveCourse}>
        <h2>Add Course</h2>
        <div>
          <label htmlFor="title">Title</label>
          <br />
          <input
            type="text"
            id="title"
            onChange={handleTitleChange}
            value={course.title}
          ></input>
        </div>
        <input type="submit" value="Save Course" />
      </form>
      <ul>{courses.map(renderCourse)}</ul>
    </>
  );
}

export default App;
