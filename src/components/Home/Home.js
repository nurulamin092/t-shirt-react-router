import React, { useState } from 'react';
import useTShirts from '../../hooks/useTShirt';
import Cart from '../Cart/Cart'
import TShirt from '../TShirt/TShirt';
import './Home.css'
const Home = () => {
    const [tShirts, setTShirts] = useTShirts();
    const [cart, setCart] = useState([]);
    const handleAddToCart = (selectedItem) => {
        const exists = cart.find(tShirts => tShirts._id === selectedItem._id);
        if (!exists) {
            const newCart = [...cart, selectedItem]
            setCart(newCart);
        }
        else {
            alert('item already added')
        }


    }
    const handleRemoveFromCart = (selectedItem) => {
        const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id);
        setCart(rest);

    }
    return (
        <div className='home-container' >
            {/* <h1>{tShirts.length}</h1> */}
            <div className="tshirt-container">
                {
                    tShirts.map(tShirt => <TShirt
                        tShirt={tShirt}
                        key={tShirt._id}
                        handleAddToCart={handleAddToCart}
                    >
                    </TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    handleRemoveFromCart={handleRemoveFromCart}
                    cart={cart}>

                </Cart>
            </div>
        </div>
    );
};

export default Home;