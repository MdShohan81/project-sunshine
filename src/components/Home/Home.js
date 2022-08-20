import React from 'react';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';
import Footer from '../Footer/Footer';
import ClientReview from '../ClientReview/ClientReview';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Courses></Courses>
            <ClientReview></ClientReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;