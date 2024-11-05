import React, { useEffect, useState } from 'react';
import Gadget from './Gadget';

const Gadgets = () => {
    const [gadgets, setGadgets] = useState([]);

    useEffect(() => {
        fetch('/public/Data/gadets.json')
            .then(res => res.json())
            .then(data => setGadgets(data));
    }, []);

    return (
        <div>
            {/* Pass the gadgets array to Gadget component */}
            <Gadget gadgets={gadgets} />
        </div>
    );
};

export default Gadgets;
