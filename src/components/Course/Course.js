import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Course = ({course}) => {
    const { _id, courseimg,coursename,price,des,teachername,teacherimg,rating} = course;

    const navigate = useNavigate();
    const navigateToCourseDetails = id => {
        navigate(`/course/${id}`)
    }
    return (
        <Card>
      <Card.Img variant="top" src={courseimg} img/>
      <Card.Body>
        <div className='d-flex justify-content-between'>
            <div className="card-title course">Course: {coursename}</div>
            <div className="card-title text-warning">Rating: {rating}</div>
        </div>
        <h5>{des}</h5>
        <div className='d-flex align-items-center my-3'>
            <img src={teacherimg} alt="teacher-img" className='rounded-circle border border-2 border-info'/>
            <div className="card-title ms-3">{teachername}</div>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
            <div className="card-title course">Price: ${price}</div>
            <button onClick={() => navigateToCourseDetails(_id)} className='btn btn-outline-info'>Know Details</button>
        </div>
      </Card.Body>
    </Card>
    );
};

export default Course;