import React, { useState, useEffect } from 'react';
import { useCart } from '../Context/CartContext'; // Import useCart
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Dashboard = () => {
    const { cart, clearCart, removeProduct } = useCart(); // Access the cart data
    const [sortOrder, setSortOrder] = useState('asc'); // State to track sorting order
    const [sortedCart, setSortedCart] = useState(cart); // State to hold the sorted cart

    // Update the sorted cart whenever the cart or sortOrder changes
    useEffect(() => {
        const sorted = [...cart].sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.price - b.price; // Sort in ascending order
            } else {
                return b.price - a.price; // Sort in descending order
            }
        });
        setSortedCart(sorted);
    }, [cart, sortOrder]);

    // Handle sorting by price
    const handleSort = () => {
        // Toggle between ascending and descending order
        setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
    };

    // Calculate total cost
    const totalCost = sortedCart.reduce((acc, product) => acc + product.price, 0);

    return (
        <div>
            <header className='text-center text-white flex flex-col gap-4 w-auto bgprimaryColor p-10'>
                <h1 className='text-3xl font-extrabold'>Product Details</h1>
                <p className='w-6/12 mx-auto font-light'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className='flex gap-4 mx-auto'>
                    <button className='btn btn-primary w-24 rounded-full'>Cart</button>
                    <button className='btn btn-primary w-24 rounded-full'>Wishlist</button>
                </div>
            </header>

            <div className='mx-auto max-w-screen-xl px-2'>
                <div className='flex justify-between mb-4'>
                    <h1>Cart</h1>
                    <div>
                        <h1>Total Cost: ${totalCost}</h1>
                    </div>
                    <div>
                        {/* Sorting Button */}
                        <button onClick={handleSort} className="btn btn-primary">
                            Sort by Price {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
                        </button>
                    </div>
                </div>

                <div className='my-8'>
                    {sortedCart.length > 0 ? (
                        <div className="grid grid-cols-1 gap-6">
                            {sortedCart.map((product, index) => (
                                <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex gap-5 items-center">
                                    <img
                                        src={product.product_image}
                                        alt={product.product_title}
                                        className="w-56 h-full object-cover rounded-md mb-4"
                                    />
                                    <div className='flex flex-col gap-4'>
                                        <h3 className="text-xl font-semibold">{product.product_title}</h3>
                                        <p className="text-gray-500">{product.description}</p>
                                        <p className="text-lg font-bold text-gray-700">${product.price}</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button
                                            onClick={() => removeProduct(product.product_id)} // Remove product
                                            className="bg-violet-500 text-white px-4 py-2 rounded-md hover:bg-violet-600">
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-lg font-medium text-gray-500">Your cart is empty!</p>
                    )}
                </div>

                {/* Purchase Button */}
                <div className="text-center mt-6">
                    <button
                        onClick={clearCart} // Clear cart
                        className="btn btn-danger">
                        Purchase
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
