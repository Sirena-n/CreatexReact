import React from 'react';

import MainBanner from './MainBannerSection/MainBanner';
import EventsSection from './EventsSection/EventsSection';
import CoursesSection from './CoursesSection/CoursesSection';
import OurTeamSection from './OurTeamSection/OurTeamSection';
import BenefitsSection from './BenefitsSection/BenefitsSection';
import Certificate from '../../Components/Certificate/Certificate';
import BlogComponent from '../../Components/BlogComponent/BlogComponent';
import AboutCreatexSection from './AboutCreatexSection/AboutCreatexSection';
import ReviewsSection from '../../Components/Reviews/ReviewsSection';
import SubscribeComponent from '../../Components/Subscribe/SubscribeComponent';
import GetConsultation from '../../Components/GetConsultation/GetConsultation';

const HomePage: React.FC = () => {
    return (
        <>
            <MainBanner />
            <AboutCreatexSection />
            <CoursesSection />
            <BenefitsSection />
            <EventsSection />
            <Certificate />
            <OurTeamSection />
            <ReviewsSection />
            <BlogComponent />
            <SubscribeComponent />
            
        </>
    );
};

export default HomePage;