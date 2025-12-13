import type { FieldErrors, FieldValues, SubmitHandler } from "react-hook-form";

export type ButtonSubmitProps<T extends FieldValues> = {
  errors: FieldErrors<T>;
  submit: SubmitHandler<T>;
  textButton: string;
};
