import React from 'react';
import Gadgets from '../Gadgets/Gadgets';

const Home = () => {
    return (
        <div className='mx-auto max-w-screen-xl text-black'>
           <h1 className='text-center  text-2xl font-bold '>Explore Cutting-Edge Gadgets</h1>
           <Gadgets></Gadgets>
        </div>
    );
};

export default Home;