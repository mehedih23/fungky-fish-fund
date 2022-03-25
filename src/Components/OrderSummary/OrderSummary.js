import './OrderSummary.css'
import React, { useState } from 'react'

const OrderSummary = ({ cart }) => {
    let name = [];
    for (const fish of cart) {
        let fishName = fish.name;
        name.push(fishName);
    }

    const onlyOne = () => {
        const one = name[Math.floor(Math.random() * name.length)];
        console.log(one);
    }
    return (
        <div>
            <h4>{name.map(name => name)}</h4>
            <button onClick={onlyOne}>only one</button>
        </div>
    )
}

export default OrderSummary