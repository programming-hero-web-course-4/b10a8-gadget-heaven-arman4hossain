import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const Scndnavbar = () => {
    const navitems = <>
        <li><a>Home</a></li>
        <li><a>Statistics</a></li>
        <li><a>Dashboard</a></li>
    </>;
    return (
        <body className='max-w-screen-xl mx-auto bg-white'>
            <nav className='navbar  ' >
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navitems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost hover:bg-transparent text-xl">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navitems}
                    </ul>
                </div>
                <div className="navbar-end flex gap-4 px-4">
                    <button className="btn btn-circle">
                        <div className='text-2xl'><IoCartOutline /></div>
                    </button>
                    <button className="btn btn-circle">
                        <div className='text-2xl'><FaRegHeart /></div>
                    </button>
                </div>
            </nav>

            
        </body>

    );
};

export default Scndnavbar;