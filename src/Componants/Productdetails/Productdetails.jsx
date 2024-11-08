import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useCart } from '../Context/CartContext';
import { useWishlist } from '../Context/WishContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Productdetails = () => {
    const { product_id } = useParams();
    const data = useLoaderData();
    const product = data.find(product => product.product_id === product_id);

    // Access addProduct function from CartContext
    const { addProduct } = useCart();
    const { addWishProduct } = useWishlist();

    // State to track button click status
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);

    // Handle add to cart
    const handleAddToCart = () => {
        addProduct(product);
        toast.success('Added to Cart!');
        setIsAddedToCart(true); // Disable the button after clicking
    };

    const handleAddToWishList = () => {
        addWishProduct(product);
        toast.success('Added to Wishlist!');
        setIsAddedToWishlist(true); // Disable the button after clicking
    };

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
                                {/* Add to Cart Button */}
                                <button
                                    onClick={handleAddToCart} // Add product to cart
                                    className="btn btn-circle flex px-4 py-2 hover:bg-violet-600 bgprimaryColor text-white font-light w-auto"
                                    disabled={isAddedToCart} // Disable after click
                                >
                                    <div className='flex text-md items-center gap-2'>
                                        <h1>Add To Cart </h1>
                                        <span className='text-2xl'><IoCartOutline /></span>
                                    </div>
                                </button>
                                <button
                                    onClick={handleAddToWishList}
                                    className="btn btn-circle border-2 border-gray-200"
                                    disabled={isAddedToWishlist} // Disable after click
                                >
                                    <div className='text-2xl'><FaRegHeart /></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default Productdetails;
