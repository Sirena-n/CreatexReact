import React from 'react';

import TwitterIcon from '@mui/icons-material/Twitter';

import './CourseAndCurator.scss';

const CourseAndCurator = () => {
    return (
        <>
            <section className='topTitle'>
                <div className="container"> 
                    <h3 className='subtitle'>course</h3>

                    <h2 className='title'>User Experience. Principles of Human-Centered Design</h2>
                </div>
                <img className='circle' src="/images/circles (2).png" alt="" />
                <img className='shapes' src="/images/shapes.png" alt="" />
                <img className='shapesArrow' src="/images/shapes (1).png" alt="" />
                <img className='dots' src="/images/dots.png" alt="" />
            </section>
            <section className='container AboutCourse'>
                <div className="CourseDescriptionSide">
                    <h2 className='title'>About the course</h2>
                    <p>Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas libero est tempus sit cras at malesuada diam. Consequat senectus dictumst non hac dignissim montes, pretium, egestas molestie. Sed magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus nunc tincidunt tortor, mi nulla pellentesque

                    </p>
                    <ul>
                        <h4>You will learn:</h4>
                        <li><img src="/images/Vector.png" alt="" />A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>
                        <li><img src="/images/Vector.png" alt="" />A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>
                        <li><img src="/images/Vector.png" alt="" />A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>
                        <li><img src="/images/Vector.png" alt="" />A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>
                        <li><img src="/images/Vector.png" alt="" />A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>
                        <li><img src="/images/Vector.png" alt="" />A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>
                    </ul>
                </div>
                <div className="JoinTheCourse">
                    <div>
                        <h3>Dates</h3>
                        <h2>Sept 7 – Nov 2</h2>
                        <p>Metus turpis sit lorem lacus, in elit tellus lacus.</p>
                    </div>
                    <div>
                        <h3>Duration</h3>
                        <h2>2 months – 8 lessons</h2>
                        <p>Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.</p>
                    </div>
                    <div>
                        <h3>Price</h3>
                        <h2>$120 per month</h2>
                        <p>Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.</p>
                    </div>
                    <button className='joinBtn'>Join the course</button>
                </div>
            </section>
            <section className='container AboutCurator'>
                <div className='faceImage'>
                    <img className='circle' src="/images/CIRCLES.png" alt="" />
                    <img className='CuratorImg' src="/images/image (2).png" alt="" />
                </div>
                <div className='CuratorDescription'>
                    <h3 className='subtitle'>Course curator</h3>
                    <h2 className='title'>Cody Fisher</h2>
                    <p className='post'>Senior UX designer in IT Product Company</p>
                    <ul>
                        <li>4.9 rate</li>
                        <li>4 courses</li>
                        <li>350 students</li>
                    </ul>
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

export default CourseAndCurator;