import React, { createContext, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import api, { setAuthToken } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  // Load token from storage
  useEffect(() => {
    (async () => {
      const storedToken = await SecureStore.getItemAsync("token");
      if (storedToken) {
        setToken(storedToken);
        setAuthToken(storedToken);
      }
    })();
  }, []);

  const login = async (username, password) => {
    const res = await api.post("/auth/login", { username, password });
    const token = res.data.token;

    setToken(token);
    setAuthToken(token);
    await SecureStore.setItemAsync("token", token);
  };

  const register = async (username, password) => {
    await api.post("/auth/register", { username, password });
  };

  const logout = async () => {
    setToken(null);
    setAuthToken(null);
    await SecureStore.deleteItemAsync("token");
  };

  return (
    <AuthContext.Provider value={{ token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
