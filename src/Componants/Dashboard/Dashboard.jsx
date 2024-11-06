import React, { useState, useEffect } from 'react';
import { useCart } from '../Context/CartContext';
import { useWishlist } from '../Context/WishContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Dashboard = () => {
    const { cart, addProduct, clearCart, removeProduct } = useCart();
    const { wishlist, removeProductFromWishlist } = useWishlist();
    const [sortOrder, setSortOrder] = useState('asc');
    const [sortedCart, setSortedCart] = useState(cart);

    // Modal state
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const sorted = [...cart].sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
        setSortedCart(sorted);
    }, [cart, sortOrder]);

    const handleSort = () => {
        setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
    };

    const totalCost = sortedCart.reduce((acc, product) => acc + product.price, 0);

    const moveToCart = (product) => {
        addProduct(product);
        removeProductFromWishlist(product.product_id);
        console.log(`Moved ${product.product_title} to cart and removed from wishlist.`);
    };

    // Modal handling
    const handlePurchase = () => {
        setIsModalOpen(true); // Open modal on purchase
        clearCart(); // Clear the cart
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close the modal
    };

    return (
        <div>
            <header className='text-center text-white flex flex-col gap-4 w-auto bgprimaryColor p-10 pb-2'>
                <h1 className='text-3xl font-extrabold'>Product Details</h1>
                <p className='w-6/12 mx-auto font-light'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </header>

            <Tabs>
                <TabList className="flex gap-2 justify-center border-none mb-5 bgprimaryColor py-5">
                    <Tab className="btn border-2 border-violet-700 hover:bg-violet-700 hover:text-white" selectedClassName="bg-white text-violet-700 border-violet-700">
                        Cart
                    </Tab>
                    <Tab className="btn border-2 border-violet-700 hover:bg-violet-700 hover:text-white" selectedClassName="bg-white text-violet-700 border-violet-700">
                        Wishlist
                    </Tab>
                </TabList>

                {/* Cart Tab Panel */}
                <TabPanel>
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
                                onClick={handlePurchase} // Trigger purchase and modal
                                className="btn btn-danger">
                                Purchase
                            </button>
                        </div>
                    </div>
                </TabPanel>

                {/* Wishlist Tab Panel */}
                <TabPanel>
                    <div className='mx-auto max-w-screen-xl px-2'>
                        <h1>Wishlist</h1>

                        {wishlist.length > 0 ? (
                            <div className="grid grid-cols-1 gap-6">
                                {wishlist.map((product, index) => (
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
                                                onClick={() => removeProductFromWishlist(product.product_id)} // Remove from wishlist
                                                className="bg-violet-500 text-white px-4 py-2 rounded-md hover:bg-violet-600">
                                                Remove from Wishlist
                                            </button>
                                            <button
                                                onClick={() => moveToCart(product)} // Move to cart
                                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                                                Move to Cart
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-lg font-medium text-gray-500">Your wishlist is empty!</p>
                        )}
                    </div>
                </TabPanel>
            </Tabs>

            {/* Modal Popup */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                        <h2 className="text-2xl font-bold mb-4">Buying Success</h2>
                        <p className="mb-6">Your purchase was successful! Thank you for shopping with us.</p>
                        <button
                            onClick={closeModal} // Close the modal
                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
