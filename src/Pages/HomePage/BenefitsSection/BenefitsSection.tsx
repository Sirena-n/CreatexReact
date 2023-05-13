import React, { useState } from 'react';

import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';

import OneBenefit from './Benefit/OneBenefit';

import './Benefits.scss';

const BenefitsSection = () => {

    // const [benefit, setBenefit] = useState('first')
    // const benefitObj = () => {
    //     const obj = {
    //         title: 'Only practicing tutors',
    //         text: 'Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.',
    //         img: '/images/illustration (1).png',
    //     }
    //     const arr = Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, value]))
    //     switch (benefit) {
    //         case 'second':
    //             return [
    //                 arr.title = 'dadwd',
    //                 arr.text = 'adwdawdda',
    //                 arr.img
    //             ]
    //         case 'third':
    //             return [
    //                 arr.title = 'third',
    //                 arr.text = 'wdda',
    //                 arr.img
    //             ]
    //         case 'quarter':
    //             return [
    //                 arr.title = 'quarter',
    //                 arr.text = 'adwdawdda',
    //                 arr.img
    //             ]
    //         default:
    //             return [arr.title, arr.text, arr.img]
    //     }
    // }

    // const controlClass = (i) => { return benefit === i ? 'active' : null }

    return (
        <section className='container benefitsWrapper'>
            <div className='benefitsWrapper__top'>
                <h3 className='subtitle'>Our benefits</h3>
                <h2 className='title'>That’s how we do it</h2>
                {/* <ul className='benefits'>
                    <li className={controlClass('first')} onClick={() => setBenefit('first')}><StarBorderRoundedIcon />Experienced Tutors</li>
                    <li className={controlClass('second')} onClick={() => setBenefit('second')}><ThumbUpOutlinedIcon />Feedback & Support</li>
                    <li className={controlClass('third')} onClick={() => setBenefit('third')}><LayersOutlinedIcon />24/7 Online Library</li>
                    <li className={controlClass('quarter')} onClick={() => setBenefit('quarter')}><ForumOutlinedIcon />Community</li>
                </ul> */}
            </div>
            {/* <OneBenefit
                title={benefitObj()}
            /> */}
        </section>
    );
};

export default BenefitsSection; 