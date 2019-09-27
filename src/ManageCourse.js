import React, { useState, useEffect } from "react";
import * as courseApi from "./api/courseApi";
import Input from "./Input";
import { toast } from "react-toastify";

const newCourse = {
  id: null,
  title: "",
  category: ""
};

function ManageCourse(props) {
  const [course, setCourse] = useState(newCourse);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const id = props.match.params.id;
    // Populate form if editing
    if (id) courseApi.getCourseById(id).then(_course => setCourse(_course));
  }, [props.match.params.id]);

  function isValid() {
    const _errors = {};

    if (!course.title) _errors.title = "Title is required.";
    if (!course.category) _errors.category = "Category is required.";

    setErrors(_errors);
    // If the errors object still has no properties, then the form is valid.
    return Object.keys(_errors).length === 0;
  }

  function saveCourse(event) {
    event.preventDefault(); // don't post back
    if (!isValid()) return;
    courseApi.saveCourse(course).then(savedCourse => {
      // Redirect to /courses
      toast.success("Course saved!");
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
        error={errors.title}
      />

      <Input
        label="Category"
        id="category"
        name="category"
        onChange={handleChange}
        value={course.category}
        error={errors.category}
      />

      <input type="submit" value="Save Course" />
    </form>
  );
}

export default ManageCourse;
