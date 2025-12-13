import { create } from "zustand";
import { logout } from "@/services/authService";
import api from "@/lib/api";

type User = {
  id: string;
  email: string;
  name: string;
};

interface AuthState {
  isLogged: boolean;
  user: User | null;
  token: string | null;
  setToken: (token: string) => void;
  setSession: (token: string, user: User) => void;
  refreshAccessToken: () => Promise<string | null>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem("token") ?? null,
  user: JSON.parse(localStorage.getItem("user") ?? "null"),
  isLogged: !!localStorage.getItem("token"),

  setSession: (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    set({ token, user, isLogged: true });
  },

  setToken: (token) => {
    set({ token: token, isLogged: true });
    localStorage.setItem("token", token);
  },

  refreshAccessToken: async () => {
    try {
      const { data } = await api.post("auth/refresh", {});
      set({ token: data.access_token });
      localStorage.setItem("token", data.access_token);
      return data.access_token;
    } catch (err) {
      return null;
    }
  },

  logout: async () => {
    await logout();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    set({ token: null, user: null, isLogged: false });
  },
}));
