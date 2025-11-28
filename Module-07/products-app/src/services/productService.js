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

export async function createProduct(product) {
    try{
        const res = await api.post("/products", product)
        return res.data;
    }catch(err){
        console.log(err)
        throw err.response?.data?.message || "Failed to create product"
    }
}

export async function deleteProduct(id) {
    try{
         await api.delete("/products/"+id)

    }catch(err){
        console.log(err)
        throw err.response?.data?.message || "Failed to delete product"
    }
}


export async function getProductById(id) {
    try{
        const res = await api.get("/products/"+id)
        return res.data;
    }catch(err){
        console.log(err)
        throw err.response?.data?.message || "Failed to get product"
    }
}

export async function updateProduct(id, product) {
    try{
        const res = await api.put("/products/"+id, product)
        return res.data;
    }catch(err){
        console.log(err)
        throw err.response?.data?.message || "Failed to update product"
    }
}
