import { LoginSchema, type LoginSchemaType } from "@/schema/LoginSchema";
import { fetchLogin } from "@/services/authService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@tanstack/react-router";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

export const useLogin = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginSchemaType> = async (data) => {
    console.log(data);
    const sucess = await fetchLogin(data);
    if (sucess) {
      toast.success("Login efetuado com sucesso!");
      navigate({ from: "/tasks/dashboard" });
      reset();
    }
  };

  return { handleSubmit, onSubmit, control, errors };
};
