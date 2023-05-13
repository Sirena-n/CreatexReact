import React from 'react';
import { useState } from 'react';

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


import './LearningProcess.scss'

const LearningProcessSection: React.FC = () => {

    // const [lesson, setLesson] = useState(null)

    // const oneLesson = (i) => {
    //     if(lesson === i){
    //         return setLesson(null)
    //     }
    //     setLesson('f')
    // }

    return (
        <section className='container LearningProcess'>
            <div className='Process'>
                <h3 className='subtitle'>Main steps</h3>
                <h2 className='title'>Online learning process</h2>
                <div className='itemWrapper'>
                    <div>
                        <h2>01 <hr /></h2>
                        <h5>Watching online video lectures</h5>
                        <p>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
                    </div>
                    <div>
                        <h2>02 <hr /> </h2>
                        <h5>Passing test</h5>
                        <p>Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim ad tempor est ea.</p>
                    </div>
                    <div>
                        <h2>03 <hr /> </h2>
                        <h5>Curator’s feedback</h5>
                        <p>Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore dolore et ad et veniam ad deserunt.</p>
                    </div>
                    <div>
                        <h2 className='fourth'>04</h2>
                        <h5>Corrections if needed</h5>
                        <p>Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.</p>
                    </div>
                </div>

            </div>
            <div className='Discount'>
                <img src="/images/circles (1).png" alt="" />
                <div className="Discount__top">
                    <h2 className='title'>20% discount for early birds!</h2>
                    <div className='date'>
                        <h4><span>06</span><br />Days</h4>
                        <h4><span>18</span><br />Hours</h4>
                        <h4><span>24</span><br />Mins</h4>
                        <h4><span>12</span><br />Sec</h4>
                    </div>
                </div>
                <form>
                    <label htmlFor="">
                        Full name
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
                    <button>Join the course</button>
                </form>
            </div>
            <div className='ForWhom'>
                <h3 className='subtitle'>For whom?</h3>
                <h2 className='title'>Who will benefit from the course:</h2>
                <ul>
                    <li><img src="/images/Vector.png" alt="" />Specialists with more than 1 year of active work experience</li>
                    <li><img src="/images/Vector.png" alt="" />Mobile app designers who want to improve their skills in solving business problems, creating and testing human-centered interfaces</li>
                    <li><img src="/images/Vector.png" alt="" />Professional designers who want to feel more confident in UX</li>
                    <li><img src="/images/Vector.png" alt="" />Specialists who would like to structure their knowledge, fill in the gaps</li>
                </ul>
            </div>
            <div className='WhatWillLearn'>
                <h3 className='subtitle'>Course program</h3>
                <h2 className='title'>What will you learn</h2>
                <div className='Learn'>
                    <ul>
                        {/* <li>
                            <div className='less'>
                                <p onClick={() => oneLesson('f')} className="lesson">{lesson ? <RemoveIcon /> : <AddIcon />} Lesson 1. </p>
                                <p className='learnTitle'>Aliquet lectus urna viverra in odio.</p>
                            </div>
                            <p style={{ display: lesson === 'f' ? 'block' : 'none' }} className='text'>
                                Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.
                            </p>
                        </li> */}
                    </ul>
                    <img src="/images/illustration (3).png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default LearningProcessSection;