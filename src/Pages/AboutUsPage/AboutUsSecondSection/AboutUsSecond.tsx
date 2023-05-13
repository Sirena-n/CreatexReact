import React from 'react';
import { Link } from 'react-router-dom';

import EastTwoToneIcon from '@mui/icons-material/EastTwoTone';

import Teammate from '../../../Components/Teammate/Teammate';

import './AboutUsSecond.scss';

const AboutUsSecond: React.FC = () => {
    return (
        <section className='container SecondSection'>
            <section className='TeachPrograms'>
                <h3 className='subtitle'>our main directions</h3>
                <h2 className='title'>What do we teach</h2>
                <div className="ProgramsWrapper">
                    <div className="Program">
                        <img src="/images/image (4).png" alt="" />
                        <div className='ProgramDescrip'>
                            <p className='sphere'>Marketing</p>
                            <p className='text'>Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.</p>
                            <Link to={'/Courses'}>Check courses <EastTwoToneIcon /> </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className='ProcessBlock'>
                <div className='ProcessWrapper'>
                    <h3 className='subtitle'>Studying process</h3>
                    <h2 className='title'>That’s how we do it</h2>
                    <ul className='ProcessInner'>
                        <li className='Process'>
                            <span className='circle'></span>
                            <hr />
                            <p className='step'>STEP 1</p>
                            <div className='ProcessInfo'>
                                <h4>Watching online video lectures</h4>
                                <p className='text'>Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque.</p>
                            </div>

                        </li>
                        <li className='Process'>
                            <span className='circle'></span>
                            <hr />
                            <p className='step'>STEP 2</p>
                            <div className='ProcessInfo'>
                                <h4>Passing test</h4>
                                <p className='text'>Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam. </p>
                            </div>

                        </li>
                        <li className='Process'>
                            <span className='circle'></span>
                            <hr />
                            <p className='step'>STEP 3</p>
                            <div className='ProcessInfo'>
                                <h4>Curator’s feedback</h4>
                                <p className='text'>Eget amet, enim pharetra leo egestas nisi, odio imperdiet facilisis. Aliquet orci varius volutpat egestas facilisi lobortis. </p>
                            </div>

                        </li>
                        <li className='Process '>
                            <span className='circle'></span>
                            <hr />
                            <p className='step'>STEP 4</p>
                            <div className='ProcessInfo'>
                                <h4>Corrections if needed</h4>
                                <p className='text'>Non tempor pulvinar tincidunt aliquam. Placerat ultricies malesuada dui auctor.</p>
                            </div>

                        </li>
                    </ul>
                </div>
                <img src="/images/illustration (6).png" alt="" />
            </section>
            <section className='TeamBlock'>
                <h3 className='subtitle'>Best tutors are all here</h3>
                <h2 className='title'>Meet our team</h2>
                <div className='TeamWrapper'>
                    <Teammate />
                </div>
            </section>
        </section>
    );
};

export default AboutUsSecond;