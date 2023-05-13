import React from 'react';

import './NewsLetter.scss';

const NewsLetter = () => {
    return (
        <section className='NewsLetter'>
            <div className="container">
                <img src="/images/illustration (7).png" alt="" />
                <form action="">
                    <h2 >Want to get the best articles weekly? <br />
                        Subscribe to our newsletter!</h2>
                    <input className='email' type="email" placeholder='Your working email' />
                    <button>Subscribe</button>
                    <label htmlFor="">
                        <input type="checkbox" />
                        I agree to receive communications from Createx Online School
                    </label>
                </form>
            </div>
        </section>
    );
};

export default NewsLetter;