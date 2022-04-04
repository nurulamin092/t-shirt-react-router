import React from 'react';
import './TShirt.css'
const TShirt = ({ tShirt, handleAddToCart }) => {
    const { name, price, picture } = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt='' />
            <h4>{name}</h4>
            <p>Price:${price}</p>
            <button onClick={() => handleAddToCart(tShirt)}>Add to cart</button>
        </div>
    );
};

export default TShirt;