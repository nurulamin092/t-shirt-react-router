import React from 'react';
import './Cart.css'
const Cart = ({ cart, handleRemoveFromCart }) => {

    //conditional rendering options
    //1. Element variable
    //2.ternary operator    condition ? true:false  
    //&& operator (shorthand)

    let command;
    if (cart.length === 0) {
        command = <p>Please Add at least one items</p>
    }
    else if (cart.length === 1) {
        command = <p>Please add more ittems....</p>
    }
    else {
        command = <p><small>Thanks for adding items</small></p>
    }
    return (
        <div>

            <h3>Selected cart :{cart.length}</h3>
            {
                cart.map(tShirt => <p>{tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                </p>)
            }
            {cart.length === 0 || <h3 className='orange'>Yah you are buing</h3>}
            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>Tinjon ke ki gift diba</p>
            </div>}
            {command}
            {cart.length !== 4 ? <p>keep Adding</p> : <button>Remove All</button>}
            {cart.length === 4 && <button className='orange'>Review all</button>}
        </div>
    );
};

export default Cart;