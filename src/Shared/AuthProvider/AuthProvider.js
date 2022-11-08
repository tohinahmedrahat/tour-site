import React, { createContext } from 'react';
import Firebase from '../../Firebase/FirebaseInit/FirebaseInit';

export const authContext = createContext()

const AuthProvider = ({children}) => {
    const firebase = Firebase()
    return (
        <authContext.Provider value={firebase}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;