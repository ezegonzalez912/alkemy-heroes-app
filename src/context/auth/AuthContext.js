import { createContext, useEffect, useReducer } from "react";
import { authReducer, initialUser } from "./authReducer";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user, dispatch] = useReducer(authReducer, initialUser)

    useEffect(() => {
        localStorage.setItem("user-hero_app", JSON.stringify(user))
    }, [user])
    
    return (
        <AuthContext.Provider value={{user, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
