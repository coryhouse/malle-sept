export async function getCourses() {
  const response = await fetch("http://localhost:3001/courses");
  if (response.ok) return response.json();
  throw new Error("Bad network response");
}

export function getCourseById(id) {
  return fetch("http://localhost:3001/courses/" + id).then(response => {
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

export function saveCourse(course) {
  let url = "http://localhost:3001/courses/";
  if (course.id) url = url + course.id;

  return fetch(url, {
    method: course.id ? "PUT" : "POST", // edit record or write new record to the database
    body: JSON.stringify(course),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
    if (response.ok) return response.json();
    throw new Error("Bad network response");
  });
}
