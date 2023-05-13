import React from 'react';
import { Link } from 'react-router-dom';

import './AboutCreatexSection.scss';

const AboutCreatexSection = () => {
    return (
        <section className='container aboutUs'>
            <div className='imageSide'>
                <img src="/images/whyCreatex.png" alt="" />
            </div>
            <div className='textSide'>
                <h4 className='subtitle'>Who we are</h4>
                <h3 className='title'>Why Createx?</h3>
                <ul>
                    <li><span><img src="/images/Vector.png" alt="" /></span>A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>
                    <li><span><img src="/images/Vector.png" alt="" /></span>Vulputate placerat amet pulvinar lorem nisl.</li>
                    <li><span><img src="/images/Vector.png" alt="" /></span>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>
                    <li><span><img src="/images/Vector.png" alt="" /></span>Etiam duis lobortis in fames ultrices commodo nibh.</li>
                    <li><span><img src="/images/Vector.png" alt="" /></span>Tincidunt sagittis neque sem ac eget.</li>
                    <li><span><img src="/images/Vector.png" alt="" /></span>Ultricies amet justo et eget quisque purus vulputate dapibus tortor.</li>
                </ul>
                <Link to='/aboutUs' className='moreAboutUs'>More about us</Link>
            </div>
        </section>
    );
};

export default AboutCreatexSection;