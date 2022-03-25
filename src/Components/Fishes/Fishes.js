import './Fishes.css'
import { BsFillCartPlusFill, BsCartCheckFill } from 'react-icons/bs';
import React, { useState } from 'react'

const Fishes = (props) => {
    const { fish, addToOrder } = props;
    const { name, picture, balance } = fish;
    const [cartIcon, setCartIcon] = useState(<BsFillCartPlusFill size={'20px'} />)


    return (
        <div className='fish'>
            <img src={picture} alt="Fish" />
            <div className='fish-info'>
                <h3>{name}</h3>
                <div className='footer'>
                    <button onClick={() => {
                        setCartIcon(<BsCartCheckFill size={'20px'} />)
                        addToOrder(fish)
                    }} /* disabled={cartIcon.type.name === 'BsCartCheckFill' ? true : false} */>
                        <p style={{ marginRight: '8px' }}>Add</p>
                        {cartIcon}
                    </button>
                    <h2>Price : {balance}</h2>
                </div>
            </div>
        </div>
    )
}

export default Fishes