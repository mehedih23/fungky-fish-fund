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
        const addedItem = cart.find(addedFish => addedFish.id === fish.id)
        let newCart = [];
        const moreCart = cart.length === 4;
        if (moreCart) {
            alert('You have reach maximum item stored.')
        } else if (addedItem) {
            alert('Your item is already in cart');
        } else {
            newCart = [...cart, fish]
            setCart(newCart);
        }
    }

    const chooseAgain = () => {
        setCart([]);
    }
    const chooseOne = () => {
        const item = cart[Math.floor(Math.random() * cart.length)];
        setCart([item]);
    }

    const removeOne = (id) => {
        let adjustCart = [];
        const remove = cart.filter(item => item.id !== id)
        if (remove) {
            adjustCart = [...remove];
            setCart(adjustCart);
        }
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
                <h3>Selected Items</h3>
                {
                    cart.map(item => <OrderSummary
                        key={cart.indexOf(item)}
                        item={item}
                        removeOne={removeOne}
                    ></OrderSummary>)
                }
                <div className="summary-button">
                    <button onClick={chooseOne} className='choose-one'>
                        Choose One
                    </button>
                    <button onClick={chooseAgain} className='choose-one'>
                        Choose Again
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Shop