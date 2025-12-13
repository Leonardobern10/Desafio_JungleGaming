import api from "@/lib/api";
import { useAuthStore } from "@/store/useAuthStore";

export const fetchLogin = async (data: { email: string; password: string }) => {
  try {
    const response = await api.post("/auth/login", data);
    useAuthStore
      .getState()
      .setSession(response.data.access_token, response.data.user);
    return true;
  } catch (error) {
    return false;
  }
};

export const fetchRegister = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    await api.post("/auth/register", data);
    return true;
  } catch (error) {
    return false;
  }
};

export const logout = async () => {
  try {
    await api.post("/auth/logout");
    return true;
  } catch (error) {
    return false;
  }
};
