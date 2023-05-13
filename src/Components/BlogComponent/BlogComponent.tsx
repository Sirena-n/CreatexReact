import React from 'react';
import { Link } from 'react-router-dom';

import Blog from '../Products/Blog/Blog';

import './BlogComponent.scss';

const BlogComponent = () => {
    return (
        <section className='container BlogSection'>
            <div className='sectionTitle'>
                <h3 className='subtitle'>Our blog</h3>
                <h2 className='title'>Latest posts</h2>
                <Link to='/blogPage'>Go to all blogs</Link>
            </div>
            <div className='blogWrapper'>
                <Blog />
            </div>
        </section>
        
    );
};

export default BlogComponent;