import api from "@/lib/api";
import { useAuthStore } from "@/store/useAuthStore";
import { AxiosError } from "axios";
import { toast } from "sonner";

export const fetchLogin = async (data: { email: string; password: string }) => {
  try {
    const response = await api.post("/auth/login", data);
    console.log(response);
    useAuthStore
      .getState()
      .setSession(response.data.access_token, response.data.user);
    return true;
  } catch (error) {
    console.log(error);

    toast.warning(
      (error as AxiosError<{ message: string }>).response?.data?.message ??
        "Erro ao autenticar"
    );
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
