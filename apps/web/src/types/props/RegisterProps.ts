import type { SubmitHandler } from "react-hook-form";

export type RegisterProps = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  onClick?: (data: SubmitHandler<RegisterProps>) => void;
};
