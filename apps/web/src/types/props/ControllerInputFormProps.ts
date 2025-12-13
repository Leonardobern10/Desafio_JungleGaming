import type { Control, FieldValues, RegisterOptions } from "react-hook-form";

export type ControllerInputFormProps<T extends FieldValues> = {
  name: keyof T & string;
  control: Control<T>;
  rules?: RegisterOptions;
  label: string;
  primaryColor?: boolean;
  placeholder: string;
  type: "text" | "email" | "password";
  error?: any;
};
