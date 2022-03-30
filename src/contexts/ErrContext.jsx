import React, { createContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ErrContext = createContext();

function ErrContextProvider({ children }) {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    return (
        <ErrContext.Provider value={{ error, setError, success, setSuccess }}>
            {children}
        </ErrContext.Provider>
    );
}

export default ErrContextProvider;
export { ErrContext };
