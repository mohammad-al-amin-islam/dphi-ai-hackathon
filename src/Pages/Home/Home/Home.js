import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Challenges from '../Challenges/Challenges';
import FaqArea from '../FaqArea/FaqArea';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            <FaqArea></FaqArea>
            <Challenges></Challenges>
        </div>
    );
};

export default Home;