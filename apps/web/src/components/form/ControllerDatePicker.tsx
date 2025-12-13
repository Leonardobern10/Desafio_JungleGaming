import { Controller } from "react-hook-form";
import { DatePickerForm } from "./DatePickerForm";
import type { ControllerDatePickerProps } from "@/types/props/ControllerDatePickerProps";

export function ControllerDatePicker({
  name,
  control,
  label,
  error,
}: ControllerDatePickerProps) {
  return (
    <div className="flex flex-col gap-2">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePickerForm
            selectedDate={field.value}
            setSelectedDate={(date) => field.onChange(date)}
            label={label}
          />
        )}
      />

      {error && <p className="text-red-500 text-sm px-1">{error.message}</p>}
    </div>
  );
}
