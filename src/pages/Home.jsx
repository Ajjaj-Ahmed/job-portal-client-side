import React from 'react';
import Banner from './shared/Banner';
import HotJobs from './HotJobs';
import Testimonial from './shared/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HotJobs></HotJobs>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;