import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductListScreen from "../screens/ProductListScreen";
import AddProductScreen from "../screens/AddProductScreen";
import EditProductScreen from "../screens/EditProductScreen";

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Products" component={ProductListScreen} />
      <Stack.Screen name="AddProduct" component={AddProductScreen} />
      <Stack.Screen name="EditProduct" component={EditProductScreen} />
    </Stack.Navigator>
  );
}
