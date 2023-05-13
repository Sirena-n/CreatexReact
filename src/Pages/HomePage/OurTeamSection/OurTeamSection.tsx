import React from 'react';


import './OurTeam.scss';
import Teammate from '../../../Components/Teammate/Teammate';

const OurTeamSection = () => {
    return (
        <section className="OurTeamWrapper">
            <div className="container">
                <div className='TeamWrapper'>
                    <h3 className='subtitle'>Best tutors are all here</h3>
                    <h2 className='title'>Meet our team</h2>
                    <div className='TeamWrapper__TeamInner'>
                        <Teammate/>
                    </div>
                </div>
            </div>
        </section> 


    );
};

export default OurTeamSection;