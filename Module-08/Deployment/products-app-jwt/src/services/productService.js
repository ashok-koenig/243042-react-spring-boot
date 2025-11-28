import api from "./api";

function getAuthHeaders(){
    return {headers: {Authorization: "Bearer "+ localStorage.getItem("token")}}
}

export async function fetchProducts() {
    try{
        const res = await api.get("/products", getAuthHeaders())
        return res.data;
    }catch(err){
        console.log(err)
        throw err.response?.data?.message || "Failed to load product"
    }
}

export async function createProduct(product) {
    try{
        const res = await api.post("/products", product, getAuthHeaders())
        return res.data;
    }catch(err){
        console.log(err)
        throw err.response?.data?.message || "Failed to create product"
    }
}

export async function deleteProduct(id) {
    try{
         await api.delete("/products/"+id, getAuthHeaders())

    }catch(err){
        console.log(err)
        throw err.response?.data?.message || "Failed to delete product"
    }
}


export async function getProductById(id) {
    try{
        const res = await api.get("/products/"+id, getAuthHeaders())
        return res.data;
    }catch(err){
        console.log(err)
        throw err.response?.data?.message || "Failed to get product"
    }
}

export async function updateProduct(id, product) {
    try{
        const res = await api.put("/products/"+id, product, getAuthHeaders())
        return res.data;
    }catch(err){
        console.log(err)
        throw err.response?.data?.message || "Failed to update product"
    }
}
