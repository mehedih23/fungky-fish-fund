import './Shop.css'
import React, { useState, useEffect } from 'react'
import Fishes from '../Fishes/Fishes';

const Shop = () => {
    const [fishes, setFishes] = useState([]);
    useEffect(() => {
        fetch('fishes.json')
            .then(response => response.json())
            .then(data => setFishes(data))
    }, [])

    return (
        <div className='shop-main'>
            <div className='fishes'>
                {
                    fishes.map(fish => <Fishes
                        key={fish.id}
                        fish={fish}
                    ></Fishes>)
                }
            </div>

            <div>

            </div>
        </div>
    )
}

export default Shop