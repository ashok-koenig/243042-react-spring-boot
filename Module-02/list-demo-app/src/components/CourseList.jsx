import React from 'react'

export default function CourseList() {

    const courses = [
        {id: 1, title: "HTML", duration: 2},
        {id: 2, title: "CSS", duration: 2},
        {id: 3, title: "JavaScript", duration: 3}
    ]
  return (
    <div>
        <h2>List of courses</h2>
        <table>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Duration (days)</th>
            </tr>
            {
                courses.map((course)=> <tr key={course.id}>
                    <td>{course.id}</td>
                    <td>{course.title}</td>
                    <td>{course.duration}</td>
                </tr>)
            }
        </table>
    </div>
  )
}
