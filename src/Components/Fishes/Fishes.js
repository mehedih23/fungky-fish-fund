import './Fishes.css'
import { BsFillCartPlusFill } from 'react-icons/bs';
import React from 'react'

const Fishes = (props) => {
    const { fish, addToOrder } = props;
    const { name, picture, balance } = fish;

    return (
        <div className='fish'>
            <img src={picture} alt="Fish" />
            <div className='fish-info'>
                <h3>{name}</h3>
                <div className='footer'>
                    <button onClick={() => addToOrder(fish)}>
                        <p style={{ marginRight: '8px' }}>Add</p>
                        <BsFillCartPlusFill size={'20px'} />
                    </button>
                    <h2>Price : {balance}</h2>
                </div>
            </div>
        </div>
    )
}

export default Fishes