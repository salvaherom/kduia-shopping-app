import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CartValue = () => {
    const { Location, CartValue } = useContext(AppContext);

    return (
        <div className="alert alert-primary">
            <span>Cart Value: {Location}{CartValue}</span>
        </div>
    );
};

export default CartValue;
