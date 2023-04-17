import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { id, name, unitprice, quantity } = props;
    const handleDeleteItem = () => {
        const item = {
            name
        };
        
        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };

    return (
        <tr>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{Location}{parseInt(unitPrice)}</td>
            <td>{Location}{parseInt(quantity) * parseInt(unitPrice)}</td>
            <td><FaTimesCircle size='2.2em' color="red" onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;
