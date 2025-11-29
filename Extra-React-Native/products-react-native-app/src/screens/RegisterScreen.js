import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function RegisterScreen({ navigation }) {
  const { register } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <Text>Register</Text>

      <TextInput placeholder="Username" value={username}
        onChangeText={setUsername} style={{ borderWidth: 1, marginVertical: 8 }} />

      <TextInput placeholder="Password" secureTextEntry value={password}
        onChangeText={setPassword} style={{ borderWidth: 1, marginVertical: 8 }} />

      <Button
        title="Create Account"
        onPress={async () => {
          await register(username, password);
          navigation.navigate("Login");
        }}
      />
    </View>
  );
}
