import {
  RegisterSchema,
  type RegisterSchemaType,
} from "@/schema/RegisterSchema";
import { fetchRegister } from "@/services/authService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "@tanstack/react-router";
import { HttpStatusCode, type AxiosError } from "axios";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

export const useRegister = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    defaultValues: {
      name: "",
      password: "",
      confirmPassword: "",
      email: "",
    },
    resolver: zodResolver(RegisterSchema),
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<RegisterSchemaType> = async (data) => {
    try {
      let { email, password, name } = data;
      await fetchRegister({ email, password, name });
      reset();

      toast.success("Usuário cadastrado com sucesso!");
      router.navigate({ from: "/auth/login" });
    } catch (error) {
      const axiosError = error as AxiosError<{ statusCode: number; message: string }>;
      if (axiosError.response?.data) {
        const { statusCode, message } = axiosError.response.data;
        if (statusCode === HttpStatusCode.Forbidden) {
          toast.warning(message);
        }
      } else {
        toast.warning("Erro ao efetuar login.");
      }
    }
  };

  return { control, handleSubmit, onSubmit, errors };
};
