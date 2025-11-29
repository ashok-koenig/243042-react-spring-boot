import { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { updateProduct } from "../services/productService";

export default function EditProductScreen({ route, navigation }) {
  const { item } = route.params;

  const [title, setTitle] = useState(item.title);
  const [category, setCategory] = useState(item.category);
  const [price, setPrice] = useState(String(item.price));

  return (
    <View style={{ padding: 20 }}>
      <TextInput value={title} onChangeText={setTitle}
        style={{ borderWidth: 1, marginVertical: 8 }} />

      <TextInput value={category} onChangeText={setCategory}
        style={{ borderWidth: 1, marginVertical: 8 }} />

      <TextInput value={price} onChangeText={setPrice}
        keyboardType="numeric" style={{ borderWidth: 1, marginVertical: 8 }} />

      <Button
        title="Update"
        onPress={async () => {
          await updateProduct(item.id, { title, category, price });
          navigation.goBack();
        }}
      />
    </View>
  );
}
