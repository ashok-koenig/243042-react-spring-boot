import api from "./api"


export async function register(data) {
    try{
        const res = await api.post("/auth/register", data)
        return res.data;
    }catch(err){
        return {error: err.response?.data?.error || "Registration Failed"}
    } 
}

export async function login(data) {
    try{
        const res = await api.post("/auth/login", data)
        return res.data;
    }catch(err){
        return {error: err.response?.data?.error || "Login Failed"}
    } 
}