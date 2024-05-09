import React, { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { AuthReducer } from './AuthReducer';
import { types } from "../types/types";


const init = () => {
    const user = JSON.parse( localStorage.getItem("user"));

    return {
        logged: !!user,
        user: user,
    }
}

export const AuthProvider = ({children}) => {

    const [authState, dispatch] = useReducer( AuthReducer, {} , init );

    const login = ( name = "") => {

        const user = { id: "ABC",name }
        const action = { types: types.login, payload: user }

        localStorage.setItem("user", JSON.stringify(user));

        dispatch(action);
    }

    const logout = () => {

        const action = { types: types.logout }
        localStorage.removeItem("user");

        dispatch(action);
    }

    return (
        
        <AuthContext.Provider  value={{
            ...authState,
            login,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
