import React from 'react';
import { Link } from 'react-router-dom';

import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

import './RegisterAndAlsoLike.scss';

const RegisterAndAlsoLike: React.FC = () => {
    return (
        <>
            <section className='RegisterWrapper'>
                <div className='container'>
                    <img src="/images/illustration (4).png" alt="" />
                    <div className='RegisterInner'>
                        <h3 className='subtitle'>Leave a request now and get 20% off!</h3>
                        <h2 className='title'>Register for the course</h2>
                        <form action="">
                            <label htmlFor="">
                                Full Name
                                <input type="text" placeholder='Your full name' />
                            </label>
                            <label htmlFor="">
                                Email
                                <input type="email" placeholder='Your working email' />
                            </label>
                            <label htmlFor="">
                                Phone
                                <input type="tel" placeholder='Your phone number' />
                            </label>
                            <button type='submit' className='join'>Join the course</button>
                        </form>

                    </div>
                </div>

            </section>
            <section className='container AlsoLikeWrapper'>
                <div className='AlsoLikeTop'>
                    <h3 className='subtitle'>Check other courses</h3>
                    <h2 className='title'>You may also like</h2>
                    <div className='itemPaginations'>
                        <WestIcon />
                        <EastIcon />
                    </div>
                </div>
                <div className='itemWrapper'>
                    <div className='item'>

                    </div>
                </div>
                <div className='AlsoLikeBtm'>
                    <h3>Do you want more courses?</h3>
                    <Link to={'/Courses'}>View all courses</Link>
                </div>
            </section>
        </>

    );
};

export default RegisterAndAlsoLike;