export function getCourses() {
  return fetch("http://localhost:3001/courses").then(response => {
    if (response.ok) return response.json();
    throw new Error("Bad network response");
  });
}
