import React from 'react';
import Header from '../Header/Header';
import Foods from '../Foods/AllFoods/Foods';
import Features from '../../Features/Features';

const Home = ({cart}) => {
    return (
        <div>
            <Header/>
            <Foods cart={cart}/>
            <Features/>
        </div>
    );
};

export default Home;