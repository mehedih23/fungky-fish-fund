import './OrderSummary.css'
import { FaTrash } from 'react-icons/fa';
import React from 'react'

const OrderSummary = (props) => {
    const { item, removeOne } = props;
    const { name, picture, id } = item;



    return (
        <div>
            <div className='fish-summary'>
                <img src={picture} alt="item" />
                <h4>{name}</h4>
                <button onClick={() => removeOne(id)}>
                    <FaTrash size={'20px'} />
                </button>
            </div>
        </div>
    )
}

export default OrderSummary