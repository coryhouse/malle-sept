import React, { useState, useEffect } from "react";
import * as courseApi from "./api/courseApi";
import Input from "./Input";
import { toast } from "react-toastify";
import Loading from "./Loading";

const newCourse = {
  id: null,
  title: "",
  category: ""
};

function ManageCourse(props) {
  const [course, setCourse] = useState(newCourse);
  const [errors, setErrors] = useState({});
  const [throwError, setThrowError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  // Runs immediately after render
  useEffect(() => {
    async function init() {
      const id = props.match.params.id;
      // Populate form if editing
      if (id) {
        try {
          const _course = await courseApi.getCourseById(id);
          setIsLoading(false);
          setCourse(_course);
        } catch (error) {
          props.history.push("/error");
          console.error(error);
        }
      } else {
        setIsLoading(false);
      }
    }

    init();
  }, [props.history, props.match.params.id]);

  function isValid() {
    const _errors = {};

    if (!course.title) _errors.title = "Title is required.";
    if (!course.category) _errors.category = "Category is required.";

    setErrors(_errors);
    // If the errors object still has no properties, then the form is valid.
    return Object.keys(_errors).length === 0;
  }

  async function saveCourse(event) {
    event.preventDefault(); // don't post back
    if (!isValid()) return;
    setIsSaving(true); // no need to set to false since redirecting.
    await courseApi.saveCourse(course);
    // Redirect to /courses
    toast.success("Course saved!");
    props.history.push("/courses");
  }

  function handleChange(event) {
    // using computed property syntax to set a property using a variable.
    setCourse({ ...course, [event.target.name]: event.target.value });
  }

  if (throwError) throw new Error("Manage course crashed");
  if (isLoading) return <Loading />;

  return (
    <form onSubmit={saveCourse}>
      <button onClick={() => setThrowError(true)}>Throw error</button>
      <h2>{course.id ? "Edit" : "Add"} Course</h2>
      <Input
        label="Title"
        id="title"
        name="title"
        onChange={handleChange}
        value={course.title}
        error={errors.title}
        disabled={isSaving}
      />

      <Input
        label="Category"
        id="category"
        name="category"
        onChange={handleChange}
        value={course.category}
        error={errors.category}
        disabled={isSaving}
      />

      <input
        type="submit"
        value={isSaving ? "Saving Course" : "Save Course"}
        disabled={isSaving}
      />
    </form>
  );
}

export default ManageCourse;
