import './Shop.css'
import React, { useState, useEffect } from 'react'
import Fishes from '../Fishes/Fishes';
import OrderSummary from '../OrderSummary/OrderSummary';

const Shop = () => {

    // Fishes state //
    const [fishes, setFishes] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('fishes.json')
            .then(response => response.json())
            .then(data => setFishes(data))
    }, [])

    const addToOrder = (fish) => {
        const newCart = [...cart, fish];
        setCart(newCart);
    }
    return (
        <div className='shop-main'>
            <div className='fishes'>
                {
                    fishes.map(fish => <Fishes
                        key={fish.id}
                        fish={fish}
                        addToOrder={addToOrder}
                    ></Fishes>)
                }
            </div>

            <div className='summary'>
                <h3>Order Summary</h3>
                <OrderSummary cart={cart}></OrderSummary>
            </div>
        </div>
    )
}

export default Shop