import type { ControllerInputFormProps } from "@/types/props/ControllerInputFormProps";
import { Controller, type FieldValues, type Path } from "react-hook-form";
import InputWithLabel from "./InputWithLabel";

export default function ControllerInputForm<T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  primaryColor,
  type = "text",
  error,
}: ControllerInputFormProps<T>) {
  return (
    <Controller
      name={name as Path<T>}
      control={control}
      render={({ field }) => (
        <InputWithLabel
          id={name}
          label={label}
          placeholder={placeholder}
          inputType={type}
          error={error}
          primaryColor={primaryColor}
          {...field}
        />
      )}
    />
  );
}
