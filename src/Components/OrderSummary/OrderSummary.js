import './OrderSummary.css'
import React from 'react'

const OrderSummary = (props) => {
    const { item } = props;
    const { name, picture } = item;



    return (
        <div>
            <div className='fish-summary'>
                <img src={picture} alt="item" />
                <h4>{name}</h4>
            </div>
        </div>
    )
}

export default OrderSummary