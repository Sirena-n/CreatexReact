import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import './MainBanner.scss'

const MainBanner = () => {

    const [video, setVideo] = useState(false)

    return (
        <section className='MainBanner'>
            <div className='container'>
                <div className='topInner'>
                    <div className='leftSide'>
                        <div className="leftSide__videoSec">
                            <div onClick={() => setVideo(!video)} className='circle'>
                                {
                                    video ? <PauseIcon /> : <PlayArrowIcon />
                                }
                            </div>
                            <p>Play showreel</p>
                        </div>
                        <h2 className='title'>
                            Enjoy studying <br />
                            with Createx <br />
                            Online Courses
                        </h2>
                        <nav className='leftSide__nav'>
                            <Link to={'/aboutUs'} className='leftSide__nav__aboutUs'>About us</Link>
                            <Link to={'/courses'} className='leftSide__nav__explore'>Explore courses</Link>
                        </nav>
                    </div>
                    <div className='rightSide'>
                        <img src="/images/illustration.png" alt="" />
                    </div>
                </div>
                <div className='btmInner'>
                    <article className="item">
                        <h3>1200</h3>
                        <p>Students graduated</p>
                    </article>
                    <article className="item">
                        <h3>84</h3>
                        <p>Completed courses</p>
                    </article>
                    <article className="item">
                        <h3>16</h3>
                        <p>Qualified tutors</p>
                    </article>
                    <article className="item">
                        <h3>5</h3>
                        <p>Years of experience</p>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default MainBanner;