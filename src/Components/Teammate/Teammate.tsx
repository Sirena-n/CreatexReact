import React from 'react';

import './Teammate.scss'

const Teammate = () => {
    return (
        <div className="TeamItem">
            <div className='TeamItem__images'>
                <div className='relative'></div>
                <div className='socialmedia'>
                    <img src="/images/Facebook.png" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
                <img className='avatar' src="/images/image.png" alt="" />

            </div>
            <h4>Dianne Russell</h4>
            <p>Founder and CEO</p>
        </div>
    );
};

export default Teammate;