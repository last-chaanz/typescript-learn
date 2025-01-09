'use client';

import React, { useState } from 'react';

export const Button = () => {
    const [name, setName] = useState('');

    const handleInputChange = (e: any) => {
        setName(e.target.value);
    };

    const handleOnClick = () => {
        alert(`Hello, ${name}`); // Example action with the state
    };

    return (
        <div>
            <input type="text" value={name} onChange={handleInputChange} placeholder="Enter your name" />
            <button onClick={handleOnClick}>Click Me</button>
        </div>
    );
};
