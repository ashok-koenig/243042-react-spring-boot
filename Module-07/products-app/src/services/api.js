import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
})

// Global error handler
api.interceptors.response.use(
    response => response,
    error => {
        const status = error.response.status;
        switch(status){
            case 400:
                console.error("Bad request")
                break;
            case 404:
                console.error("Resource not found")
                break;
            case 500:
                console.error("Internal server error")
                break;
            default:
                console.error("Unexpected Error Occured")
        }
        return Promise.reject(error)
    }
)

export default api