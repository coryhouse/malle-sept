import React, { useState } from "react";
import * as courseApi from "./api/courseApi";

const newCourse = {
  id: null,
  title: "",
  category: ""
};

function ManageCourse() {
  const [course, setCourse] = useState(newCourse);

  function saveCourse(event) {
    event.preventDefault(); // don't post back
    courseApi.addCourse(course).then(savedCourse => {
      setCourse(newCourse); // Reset the form
    });
  }

  function handleChange(event) {
    // using computed property syntax to set a property using a variable.
    setCourse({ ...course, [event.target.name]: event.target.value });
  }

  return (
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
  );
}

export default ManageCourse;
