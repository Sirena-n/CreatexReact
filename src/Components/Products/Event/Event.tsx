import React from 'react';

import { Link } from 'react-router-dom';

import './Event.scss';

const EventItem = () => {
    
    return (
        <>
            {/* {
                event.map((el, idx) => (
                    <div key={el.id} className={`EventItem ${grid ? 'GridItem' : 'listItem'}`}>
                        <h2 className='Date'>05</h2>
                        <h3 className='month'>August</h3>
                        <p className='time'>11:00 – 14:00</p>
                        <h3 className='eventName'>{el.title}</h3>
                        <p className='studyType'>{el.online ? 'Online' : 'Offline'}{el.theme}</p>
                        <Link to={`/oneEvent/${el.id}`}>View more</Link>
                    </div>
                ))
            } */}
        </>

    );
};

export default EventItem;