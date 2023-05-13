import React from 'react';

import CourseAndCurator from './CourseAndCurator/CourseAndCurator';
import LearningProcessSection from './LearningProcessSection/LearningProcessSection';
import ReviewsSection from '../../../Components/Reviews/ReviewsSection';
import RegisterAndAlsoLike from './RegisterAndAlsoLikeSection/RegisterAndAlsoLike';

const OneCourse: React.FC = () => {
    return (
        <>
            <CourseAndCurator />
            <LearningProcessSection />
            <ReviewsSection />
            <RegisterAndAlsoLike />
        </>
    );
};

export default OneCourse;