import React from 'react';
import { Navigation } from 'swiper';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import EventItem from '../../../../Components/Products/Event/Event';

import 'swiper/scss';
import './OneEventThird.scss';
import 'swiper/scss/navigation';

const OneEventThird = () => {
    return (
        <>
            <section className='container JoinEvent'>
                <form action="">
                    <h3 className='subtitle'>Don’t miss the event</h3>
                    <h2 className='title'>Leave a request</h2>
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
                    <button>Join the event</button>
                    <p>* You will receive a link to the online lecture in an email after registration.</p>
                </form>
                <img src="/images/illustration (10).png" alt="" />
            </section>
            <section className='OtherEvents'>
                <div className='container'>

                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={3}
                        navigation
                        onSwiper={(swiper) => swiper}
                        className="ItemWrapper">
                        <h3 className='subtitle'>Check other online events</h3>
                        <h2 className='title'>You may be interested in</h2>
                        {/* <SwiperSlide>
                            <EventItem grid={true} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <EventItem grid={true} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <EventItem grid={true} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <EventItem grid={true} />
                        </SwiperSlide> */}
                    </Swiper>
                    <div className='more'>
                        <h2>Do you want more?</h2>
                        <Link to={'/eventsPage'}>Explore all events</Link>
                    </div>
                </div>
            </section>
        </>

    );
};

export default OneEventThird;