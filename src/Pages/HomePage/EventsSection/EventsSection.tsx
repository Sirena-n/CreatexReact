import React from 'react';
import { Link } from 'react-router-dom';

import Event from '../../../Components/Products/Event/Event';

import './EventsSection.scss'

const EventsSection = () => {
    return (
        <section className='EventsSection'>
            <div className='container'>
                <h3 className='subtitle'>Our Events</h3>
                <h2 className='title'>Lectures & workshops</h2>
                <div className='Events'>
                    {/* <Event /> */}
                </div>
                <div className='moreEvents'>
                    <h3>Do you want more?</h3>
                    <Link to={'/Events'} className='exploreAllEvents'>Explore all events</Link>
                </div>
            </div>
        </section>
    );
};

export default EventsSection;