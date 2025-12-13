import { getAllUsers } from "@/services/usersService";
import { create } from "zustand";

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  refreshToken: string | null;
};

interface UsersStore {
  users: User[] | [];
  getUsers: () => Promise<void>;
}

export const useUsersStore = create<UsersStore>((set) => ({
  users: [],
  getUsers: async () => {
    const users = await getAllUsers();
    set({ users });
  },
}));
