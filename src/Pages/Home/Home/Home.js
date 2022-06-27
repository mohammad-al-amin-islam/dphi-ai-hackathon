import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import FaqArea from '../FaqArea/FaqArea';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            <FaqArea></FaqArea>
        </div>
    );
};

export default Home;