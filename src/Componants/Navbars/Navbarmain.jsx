import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbarmain = () => {
    const navitems = <>
        <Link to="/"><li><a>Home</a></li></Link>
        <Link to="/product"><li><a>Statistics</a></li></Link>
        <Link to="/dashboard"><li><a>Dashboard</a></li></Link>
    </>;
    return (
        <body className='max-w-screen-xl mx-auto bgprimaryColor rounded-3xl my-5 pb-24 mb-96 relative'>
            <nav className='navbar text-white ' >
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

            <header className='text-center text-white'>
                <div className='mx-auto flex flex-col gap-5 py-20 pt-10'>
                    <h1 className='text-5xl font-extrabold'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                    <p className='text-sm w-auto mx-auto md:w-2/5'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <button className="btn glass mx-auto text-white hover:text-black">Shop Now</button>
                </div>
            </header>
            <section className='absolute left-1/2 transform -translate-x-1/2 top-[70%] w-3/5 mx-auto flex justify-center aspect-video p-4 border-2  bg-white/20 backdrop-blur-lg rounded-[35px]'>
                <img className='w-full rounded-3xl object-cover' src="/src/assets/banner.jpg" alt="MainBanner" />
            </section>
        </body>

    );
};

export default Navbarmain;