import React from 'react';
import Scndnavbar from '../Navbars/Scndnavbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';


const Scndroot = () => {
    return (
        <div>
            <Scndnavbar></Scndnavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Scndroot;