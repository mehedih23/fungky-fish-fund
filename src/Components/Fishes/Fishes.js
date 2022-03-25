import './Fishes.css'
import React from 'react'

const Fishes = (props) => {
    const { fish } = props;
    const { name, picture, balance } = fish;
    return (
        <div className='fish'>
            <img src={picture} alt="Fish" />
            <div className='fish-info'>
                <h3>{name}</h3>
                <div>
                    <button>
                        add
                    </button>
                    <span><b>Price : {balance}</b></span>
                </div>
            </div>
        </div>
    )
}

export default Fishes