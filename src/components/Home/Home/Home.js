import React from 'react';
import Header from '../Header/Header';
import Foods from '../Foods/AllFoods/Foods';

const Home = ({cart}) => {
    return (
        <div>
            <Header/>
            <Foods cart={cart}/>
        </div>
    );
};

export default Home;