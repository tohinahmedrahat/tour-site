import React, { createContext } from 'react';

export const authContext = createContext()

const AuthProvider = ({children}) => {
    const firebase = {}
    return (
        <authContext.Provider value={firebase}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;