import React from 'react';

import './OneEventSecond.scss';

const OneEventSecond = () => {
    return (
        <>
            <section className='container forWhom'>
                <h3 className='subtitle'>For whom?</h3>
                <h2 className='title'>Who will benefit from the event:</h2>
                <ul>
                    <li>
                        <img src="/images/Vector.png" alt="" />
                        Specialists with more than 1 year of active work experience
                    </li>

                </ul>
            </section>
            <section className='container EventSubscribe'>
                <img src="/images/illustration (9).png" alt="" />

                <form action="">
                    <h2 className='subscribeTitle'>
                        Don’t want to miss the best events? <br />
                        Subscribe to our newsletter!
                    </h2>
                    <input type="email" placeholder='Your working email' />
                    <button type='submit'>Subscribe</button>
                    <label htmlFor="">
                        <input type="checkbox" />
                        I agree to receive communications from Createx Online School
                    </label>
                </form>
            </section>
        </>
    );
};

export default OneEventSecond;