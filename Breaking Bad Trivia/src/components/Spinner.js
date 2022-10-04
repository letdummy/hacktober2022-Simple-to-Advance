import React from 'react';
import spinner from '../img/spinner.gif';

const Spinner = () => {
    return (
        <img src={spinner} alt='Bitch is loading' style={{ width: '100px', margin: 'auto', display: 'block' }} />
    )
}

export default Spinner