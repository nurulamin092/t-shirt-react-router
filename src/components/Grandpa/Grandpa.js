import React, { createContext, useState } from 'react';
import './Grandpa.css'
import Father from '../Father/Father'
import Uncle from '../Uncle/Uncle'
import Aunty from '../Aunty/Aunty'


/* 
* context api
*1.call createContext with a default value
*2.set a variable of the context with uppercase
*3.
*
*
*/
export const RingContext = createContext('ring')
const Grandpa = () => {
    const [house, setHouse] = useState(1);
    // const ornament = 'Diamond Ring';
    const handleBuyAHouse = () => {
        const newHouse = house + 1;
        setHouse(newHouse)
    }
    const handleSellAHouse = () => {
        if (house > 0) {
            setHouse(house - 1);
        }
    }
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa' >
                <h2>Grandpa</h2>

                <p>House:{house}    <button onClick={handleBuyAHouse}>Buy A House</button>
                    <button onClick={handleSellAHouse}>Sell A House</button></p>
                <section style={{ display: 'flex' }}>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div >
        </RingContext.Provider>
    );
};

export default Grandpa;