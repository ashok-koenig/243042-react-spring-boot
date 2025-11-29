import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.168.69:8080", // Spring Boot URL
});

// Attach token to request
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

export default api;
