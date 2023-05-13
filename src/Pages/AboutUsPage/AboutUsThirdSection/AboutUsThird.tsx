import React from 'react';

import BlogComponent from '../../../Components/BlogComponent/BlogComponent';
import ReviewsSection from '../../../Components/Reviews/ReviewsSection';
import SubscribeComponent from '../../../Components/Subscribe/SubscribeComponent';

import './AboutUsThird.scss';

const AboutUsThird = () => {
    return (
        <section className='AboutUsThird'>
            <ReviewsSection />
            <section className='JobWrapper'>
                <div className="container">
                    <h3 className='subtitle'>best jobs for you</h3>
                    <h2 className='title'>Our students work here</h2>
                    <div className='JobInner'>

                    </div>
                </div>
            </section>
            <BlogComponent />
            <SubscribeComponent />
        </section>
    );
};

export default AboutUsThird;