import { Navigation } from 'swiper';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';


import SearchIcon from '@mui/icons-material/Search';

import NewsLetter from '../../../Components/NewsLetterSubscribe/NewsLetter';

import 'swiper/scss';
import './OneBlog.scss';
import 'swiper/scss/navigation';

const OneBlog = () => {
    // const { id } = useParams();
    // const [blog, setBlog] = useState([])
    
    // useEffect(() => {
    //     const oneBlog = `http://localhost:8092/blogItems/${id}`;
    //     axios
    //         .get(oneBlog)
    //         .then(res => setBlog(res.data))
    //         .catch((error) => {
    //             console.log('error');
    //             return Promise.reject(error)
    //         })
    // }, [id]);

    return (
        <>
            <section className='container OneBlog'>
                <div className='blogSide'>
                    {/* <div className='blogTitle'>
                        <div className='blogType'>
                            <p>{blog.type} |</p>
                            <h5>{blog.sphere}</h5>
                        </div>
                        <h2 className='title'>{blog.title}</h2>
                        <div className='blogTimeAndShare'>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                    <img src={blog.image} alt="" />
                    <div className='blogDescription'>
                        <h4>{blog.description}</h4>
                        <p></p>
                        <p></p>
                        <span>
                            <img src="" alt="" />
                            <p></p>
                        </span>
                        <p></p>
                        <ul>
                            <li></li>
                        </ul>
                        <p></p>
                        <ul>
                            <p>Tags:</p>

                            <li></li>
                        </ul>
                    </div> */}
                </div>
                <div className='SearchSide'>
                    <label >
                        <input type="search" placeholder='Search blog...' />
                        <SearchIcon />
                    </label>
                    <div className='author'>
                        <img src="" alt="" />
                        <h3></h3>
                        <p></p>
                        <span className='social'>

                        </span>
                    </div>
                    <ul className='trendBlogs'>
                        <li>
                            <img src="" alt="" />
                            <p className='trendBlogDate'>
                                <svg></svg>
                            </p>
                            <h3></h3>
                            <span className='AuthorSocial'>

                            </span>
                        </li>
                    </ul>
                    <div className='SearchByTags'>

                    </div>

                </div>
            </section>
            <NewsLetter />
            <section className='OtherBlogs'>
                <div className='container'>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={3}
                        navigation
                        onSwiper={(swiper) => swiper}
                        className="ItemWrapper">
                        <h3 className='subtitle'>Our blog</h3>
                        <h2 className='title'>You may also like</h2>
                        
                        <SwiperSlide>
                            {/* <Blog grid={true} /> */}
                        </SwiperSlide>
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

export default OneBlog;