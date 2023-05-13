import { Link } from 'react-router-dom';

import EastTwoToneIcon from '@mui/icons-material/EastTwoTone';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

import './Blog.scss';


const BlogItem = () => {
   
    return (
        <>
            {/* {
                blogData.map((el, idx) => (
                    <div className='Item'>
                        <div className='Item__images'>
                            <Link to={`/oneBlog/${el.id}`}>
                                <img src={el.image} alt="" />
                                <span className='itemType'>
                                    <KeyboardVoiceOutlinedIcon />
                                    <p>{el.type}</p>
                                </span>
                            </Link>
                        </div>
                        <div className='Item__discription'>
                            <div className='sphereAndTime'>
                                <p>{el.sphere}</p>
                                <p> <CalendarTodayOutlinedIcon /> September 4, 2020</p>
                                <p> <AccessTimeOutlinedIcon /> 36 min</p>
                            </div>
                            <h2 className='itemTextName'>{el.title}</h2>
                            <p className='itemText'>{el.description}</p>
                            <p className='whatToDo'>
                                {
                                    el.type === 'Article' ? 'Read' :
                                        el.type === 'Podcast' ? 'Listen' :
                                            el.type === 'Video' ? 'Watch' :
                                                ''
                                }<EastTwoToneIcon />
                            </p>
                        </div>
                    </div>
                ))
            } */}
        </>


    );
};

export default BlogItem; 