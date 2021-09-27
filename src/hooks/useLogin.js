import { useContext, useState } from "react"
import { AuthContext } from "../context/auth/AuthContext"
import { userLogin } from "../services/auth"
import { types } from "../types/types";

export const useLogin = () => {

    const { dispatch } = useContext(AuthContext)

    const [error, setError] = useState(false)

    const handleLogin = (data) => {
        setError(false)
        const res = new Promise((resolve) => {
            userLogin(data)
            .then( response => {
                setError(false)
                const { token } = response.data;
                dispatch({
                    type: types.login,
                    payload: token
                })
                return resolve("ok")
            })
            .catch( () => {
                setError(true)
                return resolve("ok")  
            })
        })

        return res;
    }

    const handleLogout = () => {
        dispatch({
            type: types.logout
        })
    }

    return {handleLogin, handleLogout, error}
}
