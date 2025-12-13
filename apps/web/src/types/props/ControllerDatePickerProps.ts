import type { Control, FieldError } from "react-hook-form";

export type ControllerDatePickerProps = {
  name: string;
  control: Control<any>;
  label: string;
  error?: FieldError;
};
