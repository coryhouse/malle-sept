import React, { useState, useEffect } from "react";
import * as courseApi from "./api/courseApi";

const newCourse = {
  id: null,
  title: "",
  category: ""
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
        {course.title} - {course.category}
      </li>
    );
  }

  function saveCourse(event) {
    event.preventDefault(); // don't post back
    courseApi.addCourse(course).then(savedCourse => {
      setCourses([...courses, savedCourse]); // copy courses array, and add saved course
      setCourse(newCourse); // Reset the form
    });
  }

  function handleChange(event) {
    // using computed property syntax to set a property using a variable.
    setCourse({ ...course, [event.target.name]: event.target.value });
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
            name="title"
            onChange={handleChange}
            value={course.title}
          ></input>
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <br />
          <input
            type="text"
            id="category"
            name="category"
            onChange={handleChange}
            value={course.category}
          ></input>
        </div>
        <input type="submit" value="Save Course" />
      </form>
      <ul>{courses.map(renderCourse)}</ul>
    </>
  );
}

export default App;
