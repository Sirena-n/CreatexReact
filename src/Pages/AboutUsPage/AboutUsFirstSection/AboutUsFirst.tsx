import React from 'react';
import { Link } from 'react-router-dom';

import './AboutUsFirst.scss';

const AboutUsFirst = () => {
    return (
        <section className='container AboutUsFirst'>
            <section className='onlineSchoolSection'>
                <div className='textSide'>
                    <h3 className='subtitle'>About us</h3>
                    <h2 className='title'>Createx Online School</h2>
                    <h5>Createx Online School is a leader in online studying. We have lots of courses
                        and programs from the main market experts.
                    </h5>
                    <p>We provide relevant approaches to online learning, internships and employment
                        in the largest companies in the country. Our educational programs help you
                        get a new specialty from scratch. During your studies, we will help you find
                        a job. Check the courses and online events that we organise.
                    </p>
                    <div className='Links'>
                        <Link to={'/Events'}>Explore events</Link>
                        <Link to={'/Courses'}>Browse courses</Link>
                    </div>
                </div>
                <img src="/images/illustration (5).png" alt="" />
            </section>
            <section className='VideoSection'>
                <button className='watchBtn'><span className='circle'></span>Watch Video </button>
                <img src="/images/image (3).png" alt="" />
                <ul className='description'>
                    <li>
                        <h2>1200</h2>
                        students graduated
                    </li>
                    <li>
                        <h2>84</h2>
                        completed courses
                    </li>
                    <li>
                        <h2>16</h2>
                        qualified tutors
                    </li>
                    <li>
                        <h2>5</h2>
                        years of experience
                    </li>
                </ul>
            </section>
            <section className='coreValues'>
                <h3 className='subtitle'>We always stand for</h3>
                <h2 className='title'>Our core values</h2>
                <div className="coreValues__Wrapper">
                    <div className="value">
                        <img src="/images/ic-structure.png" alt="" />
                        <h3>Structured Approach</h3>
                        <p>Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.</p>
                    </div>
                    <div className="value">
                        <img src="/images/ic-chat.png" alt="" />
                        <h3>Professional Feedbacks</h3>
                        <p>Culpa nostrud commodo ea consequat reprehenderit aliquip. </p>
                    </div>
                    <div className="value">
                        <img src="/images/ic-target.png" alt="" />
                        <h3>Efficiency</h3>
                        <p>Viverra scelerisque consequat net. Adipisicing esse consequat. </p>
                    </div>
                    <div className="value">
                        <img src="/images/ic-calendar.png" alt="" />
                        <h3>Flexible Shedule</h3>
                        <p>Aute eiusmod dolore dolore deserunt veniam ad deserunt. </p>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default AboutUsFirst;