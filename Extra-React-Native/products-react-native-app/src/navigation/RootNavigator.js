import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";

export default function RootNavigator() {
  const { token } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {token ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
