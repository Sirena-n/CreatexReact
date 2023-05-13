import React from 'react';

import EastTwoToneIcon from '@mui/icons-material/EastTwoTone';

import './Course.scss';

const Course = () => {

    return (
        <>
            {/* {
                courseData.map((el, idx) => (
                    <div key={el.id} className='CourseItem'>
                        <img src={el.image} alt="" />
                        <div className='itemDescription'>
                            <p className='sphere'>{el.sphere}</p>
                            <h3>{el.description}</h3>
                            <Link to={`/oneCourse/${el.id}`}>Check course <EastTwoToneIcon /></Link>
                        </div>
                    </div>
                ))
            } */}
        </>

    );
};

export default Course;