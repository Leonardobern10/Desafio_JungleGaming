import { Controller } from "react-hook-form";
import SelectForm from "./SelectForm";
import type { ControllerSelectProps } from "@/types/props/ControllerSelectProps";
import TextError from "../TextError";

export function ControllerSelect<T>({
  name,
  control,
  label,
  placeholder,
  error,
  rules,
  values,
}: ControllerSelectProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <div className="flex flex-col gap-1">
          <label className="text-sm">{label}</label>
          <SelectForm
            placeholder={placeholder}
            label={label}
            values={values}
            value={field.value}
            onValueChange={field.onChange}
          />
          {error && <TextError error={error} />}
        </div>
      )}
    />
  );
}
