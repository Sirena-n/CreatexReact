import WestIcon from '@mui/icons-material/West';
import CommentIcon from '@mui/icons-material/Comment';
import CommentsDisabledIcon from '@mui/icons-material/CommentsDisabled';

import './GetConsultation.scss';

type IConsult = {
    consult: boolean,
    changeConsult: () => void,
}

const GetConsultation = ({ consult, changeConsult }: IConsult) => {

    return (
        <div className='consultWrapper'>
            {
                !consult ?
                    <button onClick={changeConsult} className='btnConsult'><CommentIcon /> Get сonsultation</button>
                    : ''
            }
            <div className={`consult ${consult ? 'Open' : ''}`}>
                <div className='consultTitle'>
                    <span className='consultTitle__closeBtn' onClick={changeConsult}>
                        <WestIcon />
                    </span>
                    <article>
                        <h2>Teacher name</h2>
                        <h3>Online / offline</h3>
                    </article>
                </div>
                <div className='chatWrapper'>

                </div>
            </div>
        </div>
    );
};

export default GetConsultation;