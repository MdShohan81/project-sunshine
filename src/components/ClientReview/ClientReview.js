import React from 'react';
import './ClientReview.css'
import review1 from '../../assets/review/1.jpg'
import review2 from '../../assets/review/2.jpg'
import review3 from '../../assets/review/3.jpg'
import review4 from '../../assets/review/4.jpg'



const ClientReview = () => {
    return (
        <div className='container my-5'>
            <div className="row gy-4">
                <h3 className='text-center my-5'>Learners <span className='text-danger'>Reviews</span> Feedback</h3>
                <div className="col-md-6 col-sm-12 col-12">
                    <div className="card p-2">
                        <h3><b>Awesome! Loving it </b></h3>
                        <p>This course was short but very informative and very helpful for an aspiring leader like myself. It also helped me understand how to view or understand when I receive feedback. I highly recommend it!.</p>
                        <div className='d-flex'>
                            <img src={review1} alt="review-img" className='review-img me-3 rounded-circle'/>
                            <div >
                                <h5 className='text-danger'>Jenia Henri</h5>
                                <h6>From Australia</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-12">
                    <div className="card p-2">
                        <h3><b>JUST! FABULOUS </b></h3>
                        <p>I enjoyed the course and learned a lot from it. The content is well organised and focused on practical situations. I particularly enjoyed the bits of psychological research shared in the content.

</p>
                        <div className='d-flex'>
                            <img src={review2} alt="review-img" className='review-img me-3 rounded-circle'/>
                            <div >
                                <h5 className='text-danger'> Albert</h5>
                                <h6>From Netherland</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-12">
                    <div className="card p-2">
                        <h3><b>VERY QUICK & FAST </b></h3>
                        <p>​I learned a lot from this course. It gave the psychological background in addition to instructions in how to give feedback. Learning the Why made me understand the What so much better.</p>
                        <div className='d-flex'>
                            <img src={review3} alt="review-img" className='review-img me-3 rounded-circle'/>
                            <div >
                                <h5 className='text-danger'>Yasita loard</h5>
                                <h6>From Canada</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-12">
                    <div className="card p-2">
                        <h3><b>FIND IT & QUIT PROFESSIONAL </b></h3>
                        <p>This course is difficult for me to rate until I've had at least a month of practice so I can see if it has truly been useful or not.  I did enjoy the course, however, and found it to be helpful in theory. </p>
                        <div className='d-flex'>
                            <img src={review4} alt="review-img" className='review-img me-3 rounded-circle'/>
                            <div >
                                <h5 className='text-danger'>Levaran ko</h5>
                                <h6>From USA</h6>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ClientReview;