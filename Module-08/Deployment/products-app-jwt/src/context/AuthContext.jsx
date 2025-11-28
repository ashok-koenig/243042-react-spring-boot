import { createContext, useState } from "react";
import * as authService from '../services/authService'
import api from "../services/api";

export const AuthContext = createContext();

export default function AuthProvider ({children}){
    const [token, setToken] = useState(localStorage.getItem("token") || null)

    const login = async (data) => {
        const result = await authService.login(data);
        if(result?.token){
            setToken(result.token)
            localStorage.setItem("token", result.token)
        }
        return result;
    }

    const register = async (data) => {
        return await authService.register(data);
    }

    const logout = () => {
        setToken(null)
        localStorage.removeItem("token")
    }

    api.interceptors.request.use((config)=> {
        if(token){
            config.headers.Authorization = "Bearer "+ token
        }
        return config;
    })

    return (
        <AuthContext.Provider value={{token, login, register, logout}}>
            {children}
        </AuthContext.Provider>
    )
}