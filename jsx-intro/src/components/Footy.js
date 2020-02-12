import React from 'react';

const Footy = () => {
    const date = new Date();
    const currentTime = date.getFullYear();

    return(
        <p>{currentTime}</p>
    );
}

export default Footy;
