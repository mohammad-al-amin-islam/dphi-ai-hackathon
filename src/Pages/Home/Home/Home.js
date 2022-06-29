import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Challenges from '../Challenges/Challenges';
import Event from '../Event/Event';
import FaqArea from '../FaqArea/FaqArea';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            <FaqArea></FaqArea>
            <Challenges></Challenges>
            <Event></Event>
        </div>
    );
};

export default Home;