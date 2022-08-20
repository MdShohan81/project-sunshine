import React from 'react';
import hero from '../../assets/hero-1.jpg';

import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className='mt-5 hero-title'>Access 2700+</h1>
                        <h2 className='hero-subtitle'>Online Tutorial From Top Instructor.</h2>
                        <h3 className='hero-description'>Meet university,and cultural institutions</h3>
                        <h3 className='hero-description mb-5'>who'll share their experience.</h3>
                        <button className='btn btn-lg btn-danger'>View all course</button>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img src={hero} alt="img"  className='hero-img'/>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;