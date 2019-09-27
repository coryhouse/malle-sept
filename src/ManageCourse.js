import React, { useState, useEffect } from "react";
import * as courseApi from "./api/courseApi";
import Input from "./Input";

const newCourse = {
  id: null,
  title: "",
  category: ""
};

function ManageCourse(props) {
  const [course, setCourse] = useState(newCourse);

  useEffect(() => {
    const id = props.match.params.id;
    // Populate form if editing
    if (id) courseApi.getCourseById(id).then(_course => setCourse(_course));
  }, [props.match.params.id]);

  function saveCourse(event) {
    event.preventDefault(); // don't post back
    courseApi.saveCourse(course).then(savedCourse => {
      // Redirect to /courses
      props.history.push("/courses");
    });
  }

  function handleChange(event) {
    // using computed property syntax to set a property using a variable.
    setCourse({ ...course, [event.target.name]: event.target.value });
  }

  return (
    <form onSubmit={saveCourse}>
      <h2>{course.id ? "Edit" : "Add"} Course</h2>
      <Input
        label="Title"
        id="title"
        name="title"
        onChange={handleChange}
        value={course.title}
      />

      <Input
        id="category"
        name="category"
        onChange={handleChange}
        value={course.category}
      />

      <input type="submit" value="Save Course" />
    </form>
  );
}

export default ManageCourse;