import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CoustomLink';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h2>Welcome to TShirt Mania!!!!</h2>
            <nav className='nav-link'>
                {/* <Link to="/home">Home</Link >
                <Link to="/orderreview">Order Review</Link>
                <Link to="/about">About</Link> */}
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/orderreview">Order Review</CustomLink>
                <CustomLink to="/grandpa">Grandpa</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </nav>
        </div >
    );
};

export default Header;