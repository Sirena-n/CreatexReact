import React from 'react';

import './Certificate.scss';

const Certificate = () => {
    return (
        <section className='container certificateWrapper'>
            <div className='certificateDiscription'>
                <h3 className='subtitle'>Createx Certificate</h3>
                <h2 className='title'>Your expertise will be confirmed</h2>
                <p>We are accredited by international professional organizations and institutes:</p>
                <div className='organisations'>
                    <img src="/images/DelMar.png" alt="" />
                    <img src="/images/Sentinal.png" alt="" />
                    <img src="/images/National.png" alt="" />
                </div>
            </div>
            <div className='certificateIMGWrapper'>
                <img src="/images/certificate.png" alt="" />
            </div>
        </section>
    );
};

export default Certificate;