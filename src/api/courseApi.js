export function getCourses() {
  return fetch("http://localhost:3001/courses").then(response => {
    if (response.ok) return response.json();
    throw new Error("Bad network response");
  });
}

export function deleteCourse(id) {
  return fetch("http://localhost:3001/courses/" + id, {
    method: "DELETE"
  }).then(response => {
    if (response.ok) return response.json();
    throw new Error("Bad network response");
  });
}

export function addCourse(course) {
  return fetch("http://localhost:3001/courses", {
    method: "POST", // write a new record to the database
    body: JSON.stringify(course),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
    if (response.ok) return response.json();
    throw new Error("Bad network response");
  });
}
