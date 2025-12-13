import type { FieldError } from "react-hook-form";

export type InputWithLabelProps = {
  inputType: "text" | "email" | "password";
  id: string;
  placeholder: string;
  label: string;
  primaryColor?: boolean;
  error?: FieldError;
} & React.InputHTMLAttributes<HTMLInputElement>;
