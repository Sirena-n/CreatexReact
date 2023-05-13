import React from 'react';

import SearchIcon from '@mui/icons-material/Search';

import Blog from '../../../Components/Products/Blog/Blog';
import NewsLetter from '../../../Components/NewsLetterSubscribe/NewsLetter';

import './AllBlog.scss';

const AllBlog: React.FC = () => {

    
    return (
        <>
            <section className='container OurBlog'>
                <h3 className='subtitle'>Our blog</h3>
                <h2 className='title'>Createx School Journal</h2>
                <div className="filterWrapper">
                    <ul className='filter'>
                        <li className='type active'>All</li>
                        <li className='type'>Articles</li>
                        <li className='type'>Videos</li>
                        <li className='type'>Podcasts</li>
                    </ul>
                    <div className='categoryAndSearch'>
                        <label htmlFor="">
                            Blog category
                            <select name="" id="">
                                <option value="">All themes</option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                        </label>
                        <label className='SearchLabel' htmlFor="">
                            <input type="text" placeholder='Search blog...' />
                            <SearchIcon />
                        </label>
                    </div>
                </div>
                <div className='BlogsWrapper'>
                    <Blog />
                </div>
            </section >
            <NewsLetter />
        </>

    );
};

export default AllBlog;