import React, { useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import GridViewIcon from '@mui/icons-material/GridView';
import SplitscreenIcon from '@mui/icons-material/Splitscreen';

import Event from '../../../Components/Products/Event/Event';
import SubscribeComponent from '../../../Components/Subscribe/SubscribeComponent';

import './AllEvents.scss';

const AllEventsPage = () => { 

    // const [grid, setGrid] = useState(false)

    return (
        <>
            <section className='container Events'>
                <h3 className='subtitle'>Our events</h3>
                <h2 className='title'>Lectures, workshops & master-classes</h2>
                <div className='Filter'>
                    <label className='eventCategory' htmlFor="">
                        Event category
                        <select name="" id="">
                            <option value="">all themes</option>
                        </select>
                    </label>
                    <label className='sortBy' htmlFor="">
                        Sort by
                        <select name="" id="">
                            <option value="">newest</option>
                        </select>
                    </label>
                    <label className='pages' htmlFor="">
                        Show
                        <input type="number" placeholder='9' />
                        <span className='perPage'>events per page</span>
                    </label>
                    <label className='Search' htmlFor="">
                        <input type="text" placeholder='Search event...' />
                        <SearchIcon />
                    </label>
                    <div className='grids'>
                        {/* <SplitscreenIcon onClick={() => setGrid(false)} className={!grid ? 'active' : ''} />
                        <GridViewIcon onClick={() => setGrid(true)} className={`grid ${grid ? 'active' : ''}`} /> */}
                    </div>
                </div>
                <div
                    className='EventsWrapper'
                    // style={grid ?
                    //     { gridTemplateColumns: '1fr 1fr 1fr' } :
                    //     { flexDirection: 'column' }}
                        >
                    {/* <Event grid={grid} /> */}
                </div>
            </section>
            <SubscribeComponent />
        </>

    );
};

export default AllEventsPage;