import React from 'react';
import './Home.css'
import Services from '../Services/Services';
import Banner from '../Banner/Banner';
import Accordation from '../Accordation/Accordation';
import DestinationIdea from '../DestinationIdea/DestinationIdea';
const Home = () => {
    return (
     <div>
     <Banner></Banner>
     <Services></Services>
     <Accordation></Accordation>
     <DestinationIdea></DestinationIdea>
     </div>
    );
};

export default Home;