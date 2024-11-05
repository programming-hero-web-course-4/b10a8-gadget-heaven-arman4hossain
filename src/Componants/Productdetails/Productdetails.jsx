import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const Productdetails = () => {
    const { product_id } = useParams();
    const data = useLoaderData();
    const product = data.find(product => product.product_id === product_id);

    return (
        <div className='mx-auto relative mb-96'>
            <header className='text-center text-white flex flex-col gap-4 w-auto bgprimaryColor p-10 pb-56'>
                <h1 className='text-3xl font-extrabold'>Product Details</h1>
                <p className='w-6/12 mx-auto font-light'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </header>
            <section className='absolute left-1/2 transform -translate-x-1/2 top-44 w-5/6'>
                <div className="bg-base-200  rounded-3xl w-auto">
                    <div className="flex items-center gap-10 flex-col lg:flex-row">
                        <div className='w-2/4 h-full p-5'>
                            <img
                                src={product.product_image}
                                className=" rounded-2xl w-full" />
                        </div>
                        <div className='flex w-3/4 flex-col gap-4'>
                            <h1 className="text-5xl font-bold">{product.product_title}</h1>
                            <p><span className='font-bold'>Price:</span> ${product.price}</p>
                            {product.availability ? <p>In stock</p> : <p>Not available</p>}
                            <p>{product.description}</p>
                            <div>
                                <h2>Specification:</h2>
                                <ul className='list-decimal pl-10'>
                                    {product.specification.map((spec, index) => (
                                        <li key={index}>{spec}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h2>Rating: {product.rating}</h2>
                            </div>
                            <div className="flex gap-4 w-full">
                                <button className="btn btn-circle flex px-4 py-2 hover:bg-violet-600 bgprimaryColor text-white font-light w-auto">
                                    <div className='flex text-md items-center gap-2'>
                                        <h1>Add To Cart </h1>
                                        <span className='text-2xl'><IoCartOutline /></span>
                                    </div>
                                </button>
                                <button className="btn btn-circle border-2 border-gray-200">
                                    <div className='text-2xl'><FaRegHeart /></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Productdetails;