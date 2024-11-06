import React from 'react';

const Footer = () => {
    return (
        <footer className=" bg-gray-100 text-center text-gray-700 mt-5 p-10">
            <h1 className='text-2xl font-bold'>Gadget Heaven</h1>
            <p>Leading the way in cutting-edge technology and innovation.</p>
            <footer className="footer  text-center bg-gray-100 text-gray-700 p-10">
                <nav className='mx-auto'>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className='mx-auto'>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className='mx-auto'>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>

        </footer>
    );
};

export default Footer;