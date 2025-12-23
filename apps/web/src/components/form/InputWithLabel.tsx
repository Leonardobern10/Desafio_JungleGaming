import type { InputWithLabelProps } from "@/types/props/InputWithLabelProps";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import TextError from "../TextError";

export default function InputWithLabel({
  id,
  placeholder,
  inputType = "text",
  label,
  primaryColor = false,
  error,
  ...rest
}: InputWithLabelProps) {
  const textColor = primaryColor ? "text-primary" : "text-secondary";
  return (
    <div className="flex flex-col justify-between w-full w-max-5/6 min-h-15">
      <Label className={`text-sm ${textColor}`} htmlFor={id}>
        {label}
      </Label>
      <Input
        id={id}
        placeholder={placeholder}
        type={inputType}
        {...rest}
        className="text-xs"
      />
      {error && <TextError error={error} />}
    </div>
  );
}
