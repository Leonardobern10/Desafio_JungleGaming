import api from "@/lib/api";

export const getAllUsers = async () => {
  try {
    const result = await api.get("/auth/users");
    return Array.isArray(result.data) ? result.data : [];
  } catch (error) {
    console.error("Erro ao obter usuários: ", error);
    return [];
  }
};
