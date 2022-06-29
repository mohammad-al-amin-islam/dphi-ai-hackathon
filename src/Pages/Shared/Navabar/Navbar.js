import React from 'react';
import img from '../../../Images/icon.PNG'
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='container img-container'>
            <Link to='/'><img src={img} alt="img" /></Link>
        </div>
    );
};

export default Navbar;