import React from 'react';
import { Link } from 'react-router-dom';

import Course from '../../../Components/Products/Course/Course';

import './CoursesSection.scss';

const CoursesSection = () => {
    return (
        <section className='container CoursesWrapper'>
            <div className='sectionTop'>
                <h3 className='subtitle'>Ready to learn?</h3>
                <h2 className='title'>Featured Courses</h2>
                <Link to={'/'}>View all courses</Link>
            </div>
            <div className='itemsWrapper'>
                <Course />
            </div>
        </section>
    );
};

export default CoursesSection;