import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [ornament, house] = useContext(RingContext)

    return (
        <div>
            <h5>Sister</h5>
            <p><small>house:{house}</small></p>
            <p>Sepecial Gift:{ornament}</p>
        </div>
    );
};

export default Sister;