import api from "./api";


export async function fetchProducts() {
    try{
        const res = await api.get("/products")
        return res.data;
    }catch(err){
        console.log(err)
        throw err.response?.data?.message || "Failed to load product"
    }
}