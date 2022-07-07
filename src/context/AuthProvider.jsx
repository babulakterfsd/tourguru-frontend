import React, { createContext } from 'react';
import useAllStates from '../hooks/useAllStates';

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const allContexts = useAllStates();
    return <AuthContext.Provider value={allContexts}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
