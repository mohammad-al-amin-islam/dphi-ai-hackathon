import React from 'react';
import img from '../../../Images/icon.PNG'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='container img-container'>
            <img src={img} alt="img" />
        </div>
    );
};

export default Navbar;