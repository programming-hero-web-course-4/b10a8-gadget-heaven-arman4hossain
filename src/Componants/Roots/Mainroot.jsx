import React from 'react';
import Navbarmain from '../Navbars/Navbarmain';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';

const Mainroot = () => {
    return (
        <div >
           <Navbarmain></Navbarmain>
           <Home></Home>
           <Footer></Footer>
        </div>
    );
};

export default Mainroot;