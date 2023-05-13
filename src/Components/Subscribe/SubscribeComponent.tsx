import React from 'react';

import './SubscribeComponent.scss'


const SubscribeComponent = () => {
    return (
        <section className='Subscribe'>
            <h3 className='subtitle'>Don’t miss anything</h3>
            <h2 className='title'>Subscribe to the Createx School <br /> announcements</h2>
            <form >
                <input type="email" placeholder='Your working email' />
                <button type='submit'>Subscribe</button>
            </form>
            <img className='leftImg' src="/images/illustration (2).png" alt="" />
            <img className='rightImg' src="/images/illustration (2).png" alt="" /> 
        </section>
    );
};

export default SubscribeComponent;