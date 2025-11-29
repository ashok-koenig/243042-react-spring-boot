import React, { useEffect, useState, useContext } from "react";
import { View, Text, Button, FlatList, TouchableOpacity } from "react-native";
import { getProducts, deleteProduct } from "../services/productService";
import { AuthContext } from "../context/AuthContext";

export default function ProductListScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const { logout } = useContext(AuthContext);

  const loadProducts = async () => {
    const res = await getProducts();
    setProducts(res.data);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", loadProducts);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ padding: 20 }}>
      <Button title="Add Product" onPress={() => navigation.navigate("AddProduct")} />
      <Button title="Logout" onPress={logout} />

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("EditProduct", { item })}
          >
            <Text>{item.title} — {item.price}</Text>
            <Button title="Delete" onPress={() => { deleteProduct(item.id); loadProducts(); }} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
