import React from 'react';
import './Father.css'
import MySelf from '../MySelf/MySelf'
import Brother from '../Brother/Brother'
import Sister from '../Sister/Sister'
const Father = ({ house }) => {
    return (
        <div>
            <h4>Father</h4>
            <p>house :{house}</p>
            <div style={{ display: 'flex' }}>
                <MySelf house={house}></MySelf>
                <Brother house={house}></Brother>
                <Sister></Sister>
            </div>
        </div>
    );
};

export default Father;