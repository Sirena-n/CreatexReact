import { useState } from 'react';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import LoopIcon from '@mui/icons-material/Loop';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import Course from '../../../Components/Products/Course/Course';
import Certificate from '../../../Components/Certificate/Certificate';
import ReviewsSection from '../../../Components/Reviews/ReviewsSection';
import SubscribeComponent from '../../../Components/Subscribe/SubscribeComponent';

import './AllCourses.scss'


const CoursesPage = () => {

    const [age, setAge] = useState<string>('');

    const handleChange = (event: any) => {
        setAge(event);
    };

    return (
        <>
            <section className='container AllCoursesWrapper'>
                <h3 className='subtitle'>Enjoy your studying!</h3>
                <h2 className='title'>Our online courses</h2>
                <nav className='filterNav'>
                    <ul>
                        <li className='active'>All<span>5</span></li>
                        <li className='active'>Marketing<span></span></li>
                        <li className='active'>Management<span></span></li>
                        <li className='active'>HR & Recruting<span></span></li>
                        <li className='active'>Design<span></span></li>
                        <li className='active'>Development<span></span></li>
                    </ul>
                    <FormControl className='selectForm' variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={age}
                            onChange={(e) => handleChange(e.target.value)}
                            label="Age"
                        >
                            <MenuItem value="">
                                <em>All</em>
                            </MenuItem>
                            <MenuItem value={20}>Marketing</MenuItem>
                            <MenuItem value={30}>Management</MenuItem>
                            <MenuItem value={30}>HR & Recruting</MenuItem>
                            <MenuItem value={30}>Design</MenuItem>
                            <MenuItem value={30}>Development</MenuItem>
                        </Select>
                    </FormControl>

                    <label className='CourseSearch' htmlFor="">
                        <input type="search" placeholder='Search course...' />
                        <SearchOutlinedIcon />
                    </label>
                </nav>
                <div className='CoursesWrapper'>
                    <Course />
                </div>
                <button className='loadMore'><LoopIcon />Load more</button>
            </section>
            <ReviewsSection />
            <Certificate />
            <SubscribeComponent />
        </>
    );
};

export default CoursesPage;