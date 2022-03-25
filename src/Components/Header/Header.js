import './Header.css'
import logo from '../../images/logo.png'
import React from 'react'


const Header = () => {

    return (
        <>
            <nav className='header'>
                <img src={logo} alt="brand logo" />
            </nav>
            <div className='header-text'>
                <h1>Welcome To Fungky Fish Fund</h1>
                <h3>Select Your Favorite Four </h3>
            </div>
        </>
    )
}

export default Header