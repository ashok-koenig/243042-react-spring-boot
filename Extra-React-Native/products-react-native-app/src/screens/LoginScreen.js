import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function LoginScreen({ navigation }) {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <Text>Login</Text>

      <TextInput placeholder="Username" value={username}
        onChangeText={setUsername} style={{ borderWidth: 1, marginVertical: 8 }} />

      <TextInput placeholder="Password" secureTextEntry value={password}
        onChangeText={setPassword} style={{ borderWidth: 1, marginVertical: 8 }} />

      <Button title="Login" onPress={() => login(username, password)} />

      <Button title="Register" onPress={() => navigation.navigate("Register")} />
    </View>
  );
}
