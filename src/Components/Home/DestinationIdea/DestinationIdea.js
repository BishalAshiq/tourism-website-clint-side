import React from 'react';
import './DestinationIIdea.css';
import des1 from '../../../images/destinations ideas/16-best-places-BD.jpg'
import des2 from '../../../images/destinations ideas/Jahaj.jpg'
import des3 from '../../../images/destinations ideas/suspension-bridge-5297744_1280.jpg'
import des4 from '../../../images/destinations ideas/saint-martins-island-1.jpg'
import des5 from '../../../images/destinations ideas/nick-karvounis-YH7KYtYMET0-unsplash.jpg'
import des6 from '../../../images/destinations ideas/the-anam-_twiIcIsp2s-unsplash.jpg'
import des7 from '../../../images/destinations ideas/runnyrem-LfqmND-hym8-unsplash.jpg'

const DestinationIdea = () => {
    return (
            <div className='destination'>
            <h1 className='mt-5'>Destination Ideas in Bangladesh</h1>
            <div className='img'>
            <img src={des1} alt=""/>
            <img src={des5} alt=""/>
            <img src={des3} alt=""/>
            <img src={des7} alt=""/>
            <img src={des4} alt=""/>
            <img src={des6} alt=""/>
            <img src={des2} alt=""/>
            </div>
        </div>
    );
};

export default DestinationIdea;