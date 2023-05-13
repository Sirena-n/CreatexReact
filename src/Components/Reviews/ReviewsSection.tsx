import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/scss';
import './Review.scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const ReviewsSection = () => {

    const swiper = useSwiper(); 

    return (
        <section className='ReviewsWrapper'>
            <div className="container">
                <h3 className='subtitle'>TESTIMONIALS</h3>
                <h2 className='title'>What our students say</h2>
                <div className="swiper-Root">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{
                            clickable: true,
                            bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`
                        }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => swiper}
                        className='ReviewWrapper'>
                            
                        <SwiperSlide className="reviewItem">
                            <img className='braces' src="/images/braces.png" alt="" />
                            <div className='reviewDescription'>
                                <p className='descrip'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.

                                </p>
                                <div className='user'>
                                    <img src="/images/image (1).png" alt="" />
                                    <span>
                                        <p className='name'>Eleanor Pena</p>
                                        <p className='position'>Position, Course</p>
                                    </span>

                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide  className="reviewItem">
                            <img className='braces' src="/images/braces.png" alt="" />
                            <div className='reviewDescription'>
                                <p className='descrip'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.

                                </p>
                                <div className='user'>
                                    <img src="/images/image (1).png" alt="" />
                                    <span>
                                        <p className='name'>Eleanor Pena</p>
                                        <p className='position'>Position, Course</p>
                                    </span>

                                </div>

                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>
        </section>
    );
};

export default ReviewsSection;