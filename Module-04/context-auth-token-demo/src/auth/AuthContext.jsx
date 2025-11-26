import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({children}){
    const [token, setToken] = useState(localStorage.getItem("token") || null);

    useEffect(()=>{
        if(token){
            localStorage.setItem("token", token)
        }else{
            localStorage.removeItem("token")
        }
    }, [token])

    const login = async (username, password) => {
        const res = await axios.post("https://dummyjson.com/auth/login", {username, password})
        setToken(res.data.accessToken)
    }

    const logout = () => {
        setToken(null)
    }

    axios.interceptors.request.use((config)=> {
        if(token){
            config.headers.Authorization = "Bearer "+ token
        }
        return config;
    })

    return (<AuthContext.Provider value={{token, login, logout}}>
        {children}
    </AuthContext.Provider>)
}