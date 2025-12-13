import {
  RegisterSchema,
  type RegisterSchemaType,
} from "@/schema/RegisterSchema";
import { fetchRegister } from "@/services/authService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "@tanstack/react-router";
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
    await fetchRegister(data);
    reset();

    toast.success("Usuário cadastrado com sucesso!");
    router.navigate({ from: "/auth/login" });
  };

  return { control, handleSubmit, onSubmit, errors };
};
