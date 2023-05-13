import React from 'react';

import './Contact.scss';

const Contact = () => {
    
    return (
        <section className='container Contact'>
            <div className='mapSection'>
                <div className='info'>
                    <h3 className='subtitle'>Contact info</h3>
                    <h2 className='title'>Get in touch</h2>
                    <ul>
                        <li><span>Talk to us:</span> <p>hello@createx.com</p> </li>
                        <li><span>Call us:</span> <p>(405) 555-0128</p></li>
                        <li><span>Address:</span> <p>2464 Royal Ln. Mesa, New Jersey 45463, USA</p></li>
                    </ul>
                    <div className='followUs'>
                        <h3>Follow us:</h3>
                        <div className='followItems'>

                        </div>
                    </div>
                </div>
                <img src="/images/map.png" alt="" />
            </div>
            <div className='questionSection'>
                <img src="/images/illustration (8).png" alt="" />
                <div className='name'>
                    <h3 className='subtitle'>Any questions?</h3>
                    <h2 className='title'>Drop us a line</h2>
                </div>
                <form action="">

                    <label className='FirstName' htmlFor="">
                        First Name*
                        <input type="text" placeholder='Your first name' />
                    </label>
                    <label className='LastName' htmlFor="">
                        Last  Name*
                        <input type="text" placeholder='Your last name' />
                    </label>
                    <label className='email' htmlFor="">
                        Email*
                        <input type="email" placeholder='Your working email' />
                    </label>
                    <label className='tel' htmlFor="">
                        Phone
                        <input type="tel" placeholder='Your phone number' />
                    </label>
                    <label className='message' htmlFor="">
                        Message*
                        <input type="text" placeholder='Your message' />
                    </label>
                    <label className='checkbox' htmlFor="">
                        <input type="checkbox" />
                        I agree to receive communications from Createx Online School
                    </label>
                    <button type='submit'>Send message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;