import React from 'react';
import { Link } from 'react-router-dom';

import EastIcon from '@mui/icons-material/East';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import './footer.scss'
 
const Footer = () => {
    
     const scrollUp = () =>{
        window.scrollTo(
            {
                top: 0,
                behavior: 'smooth'
            }
        )    
     }
     
     return (
        <footer>
            <div className='container'> 
                <div className='footerTop'>
                    <article className='logoAndinfo'>
                        <Link to={'/'}>
                            <p className='logo'>CREATE
                                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.69978 8.7L3.4998 0.6C3.0998 0.2 2.5998 0 2.0998 0C1.5998 0 1.0998 0.2 0.699803 0.6C-0.000194848 1.4 -0.000194848 2.6 0.699803 3.4L5.59979 10L0.699803 16.6C-0.000194848 17.4 -0.000194848 18.6 0.699803 19.4C1.0998 19.8 1.5998 20 2.0998 20C2.5998 20 3.0998 19.8 3.4998 19.4L9.69978 11.3C10.3998 10.7 10.3998 9.5 9.69978 8.7Z" fill="#FF3F3A" />
                                    <path d="M12.3426 8.7L18.5426 0.6C18.9426 0.2 19.4426 0 19.9426 0C20.4426 0 20.9426 0.2 21.3426 0.6C22.0426 1.4 22.0426 2.6 21.3426 3.4L16.4426 10L21.3426 16.6C22.0426 17.4 22.0426 18.6 21.3426 19.4C20.9426 19.8 20.4426 20 19.9426 20C19.4426 20 18.9426 19.8 18.5426 19.4L12.3426 11.3C11.6426 10.7 11.6426 9.5 12.3426 8.7Z" fill="#FF3F3A" />
                                </svg>
                            </p>
                        </Link>
                        <p className='info'>Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts.

                        </p>
                        <div className='socialMedia'>
                            <img src="/images/Group (2).png" alt="" />
                        </div>
                    </article>
                    <ul>
                        <p>SITE MAP</p>
                        <li><Link to={'/aboutUs'}>About Us</Link></li>
                        <li><Link to={'/allCourses'}>Courses</Link></li>
                        <li><Link to={'/eventsPage'}>Events</Link></li>
                        <li><Link to={'/blogPage'}>Blog</Link></li>
                        <li><Link to={'/contacts'}>Contacts</Link></li>
                    </ul>
                    <ul>
                        <p>COURSES</p>
                        <li><Link to={'/aboutUs'}>Marketing</Link></li>
                        <li><Link to={'/allCourses'}>Management</Link></li>
                        <li><Link to={'/eventsPage'}>HR & Recruting</Link></li>
                        <li><Link to={'/blogPage'}>Design</Link></li>
                        <li><Link to={'/contacts'}>Development</Link></li>
                    </ul>
                    <article className='contactPanel'>
                        <h4>CONTACT US</h4>
                        <p>(405) 555-0128</p>
                        <p>hello@createx.com</p>
                    </article>
                    <form className='emailForm'>
                        <p className='formTitle'>SIGN UP TO OUR NEWSLETTER</p>
                        <label className='input' htmlFor="">
                            <input type="email" placeholder='Email address' />
                            <EastIcon />
                        </label>
                        <p className='formDis'>*Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.</p>
                    </form>
                </div>
            </div>
            <div className='footerBottom'>
                <div className='container'>
                    <p className='fooBtmDes'>© All rights reserved.Made with
                        <i className='heart'><FavoriteBorderIcon /></i>
                        by Createx Studio
                    </p>
                    
                    <p onClick={() => scrollUp()} className='toTop'><i className='arrow'><ArrowUpwardIcon/></i>GO TO TOP</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;