import { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { addProduct } from "../services/productService";

export default function AddProductScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Title" value={title} onChangeText={setTitle}
        style={{ borderWidth: 1, marginVertical: 8 }} />

      <TextInput placeholder="Category" value={category} onChangeText={setCategory}
        style={{ borderWidth: 1, marginVertical: 8 }} />

      <TextInput placeholder="Price" value={price} onChangeText={setPrice}
        keyboardType="numeric" style={{ borderWidth: 1, marginVertical: 8 }} />

      <Button
        title="Save"
        onPress={async () => {
          await addProduct({ title, category, price });
          navigation.goBack();
        }}
      />
    </View>
  );
}
