import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))

    },[])
    return (
        <div>
            <div className="container mt-5 pt-5">
                <div>
                    <h2 className='course-title'>Find The Right</h2>
                    <h2 className='course-title'>Onlilne Course For You</h2>
                    <p className='course-description'>You don't have to struggle alone, you've got our assistance and help.</p>
                </div>
                <div className='my-5 course-container'>
                    {
                        courses.map(course => <Course
                        key={course._id}
                        course={course}
                        ></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;