import { useState, useEffect, createContext } from "react";
import { jwtDecode } from "jwt-decode"

const AuthContext = createContext();

const AuthProvider = ( { children } ) => {
    
    const [ usuario, setUsuario ] = useState( null );
    const [ token, setToken ] = useState( null );

    useEffect( () => {

        if (token) {
        try {
            const decoded = jwtDecode( token );
            console.log( decoded );
            setUsuario( decoded );
        } catch (error) {
            console.error('Token Invalido', error);
            setUsuario(null);
        }
        } else {
            setUsuario(null);
        }


    }, [ token ]);


    const login = ( usuario, token ) => {
        setUsuario( usuario );
        setToken( token );
        localStorage.setItem('jwt', token);
    }

    const logout = () => {
        setUsuario( null );
        setToken( null );
        localStorage.removeItem('jwt');
    }

    return(
        <AuthContext.Provider value={ { usuario, token, login, logout } }>
            { children }
        </AuthContext.Provider>
    )
}


export { AuthContext, AuthProvider }


