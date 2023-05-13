import React from 'react';
import { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import TwitterIcon from '@mui/icons-material/Twitter';

import './OneEventFirst.scss';

const OneEventFirst = () => {
    // const [lesson, setLesson] = useState(null)

    // const oneLesson = (i) => {
    //     if (lesson === i) {
    //         return setLesson(null)
    //     }
    //     setLesson(i)
    // }

    return (
        <>
            <section className='topTitle'>
                <div className="container">
                    {/* <h3 className='subtitle'>{event.online ? 'Online' : 'Offline'} {event.theme}</h3>

                    <h2 className='title'>{event.title}</h2> */}
                </div>
                <img className='circle' src="/images/circles (2).png" alt="" />
                <img className='shapes' src="/images/shapes.png" alt="" />
                <img className='shapesArrow' src="/images/shapes (1).png" alt="" />
                <img className='dots' src="/images/dots.png" alt="" />
            </section>
            <section className='container talkAbout'>
                <div>
                    <h2 className='title'>We will talk about:</h2>
                    <ul>
                        {/* {
                            event.subthemes !== undefined &&
                            event.subthemes.map((el, idx) => (
                                <li key={el.id}>
                                    <div className='less'>
                                        <p onClick={() => oneLesson(el.id)} className="lesson">{lesson === el.id ? <RemoveIcon /> : <AddIcon />} Theme {el.id}. </p>
                                        <p className='learnTitle'>{el.subtheme}</p>
                                    </div>
                                    <p style={{ display: lesson === el.id ? 'block' : 'none' }} className='text'>{el.description}</p>
                                </li>
                            ))
                        } */}

                    </ul>
                </div>
                <div className="JoinTheEvent">
                    {/* {
                        event.date !== undefined &&
                        event.date.map((date, idx) => (
                            <div key={idx}>
                                <h3>Time</h3>
                                <h2>{date.month} {date.day}, {date.time}</h2>
                                <p>Metus turpis sit lorem lacus, in elit tellus lacus.</p>
                            </div>
                        ))
                    } */}
                    <div>
                        <h3>Price</h3>
                        {/* <h2>{event.price}</h2> */}
                        <p>Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.</p>
                    </div>
                    <h2 className='facebook'>Event on Facebook</h2>
                    <button className='joinBtn'>Join the event</button>
                </div>
            </section>
            <section className='container Speaker'>
                <div className='faceImage'>
                    <img className='circle' src="/images/CIRCLES.png" alt="" />
                    <img className='CuratorImg' src="/images/image (2).png" alt="" />
                </div>
                <div className='CuratorDescription'>
                    <h3 className='subtitle'>Speaker</h3>
                    <h2 className='title'>Kathryn Murphy</h2>
                    <p className='post'>Analyst and Marketing specialist in IT company</p>
                    <p className='definition'>Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo, consequat. Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam. Sem vulputate molestie laoreet at massa sed pharetra. Ac commodo platea id habitasse proin. Nullam sit nec ipsum posuere non. Nam vel aliquam tristique sollicitudin interdum quam.

                    </p>
                    <div className='CuratorSocial'>
                        <TwitterIcon />
                    </div>
                </div>
            </section>
        </>
    );
};

export default OneEventFirst;