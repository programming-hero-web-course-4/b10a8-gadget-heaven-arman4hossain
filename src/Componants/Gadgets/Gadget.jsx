import React from 'react';
import { Link } from 'react-router-dom';

const Gadget = ({ gadgets }) => {
    if (!gadgets || gadgets.length === 0) return null; // Ensure gadgets data is loaded

    // Calculate unique categories
    const uniqueCategories = [...new Set(gadgets.map(gadget => gadget.category))];

    return (
        <div className='flex gap-5 py-10'>
            <div className='flex flex-col w-1/6 gap-5 items-center '>
                {uniqueCategories.map((category, index) => (
                    <button key={index} className='btn w-32'>{category}</button>
                ))}
            </div>

            <div className=' w-5/6 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                {gadgets.map(gadget => (
                    <div key={gadget.product_id} >
                        <div className="card bg-gray-200 w-76 h-full  shadow-xl">
                            <figure className="px-6 pt-6 ">
                                <img
                                    src={gadget.product_image}
                                    alt="Shoes"
                                    className="rounded-xl object-cover h-52 w-full" />
                            </figure>
                            <div className="card-body items-start text-left">
                                <h2 className="card-title">{gadget.product_title}</h2>
                                <p><span className='font-bold'>Price:</span> ${gadget.price}</p>
                                <Link to={`/product/${gadget.product_id}`}>
                                    <div className="card-actions">
                                        <button className="btn btn-outline btn-secondary">View Details</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gadget;
