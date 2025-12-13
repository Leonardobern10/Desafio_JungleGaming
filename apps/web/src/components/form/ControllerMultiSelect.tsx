import { Controller } from "react-hook-form";
import { MultiSelect } from "../MultiSelect";

type ControllerMultiSelectProps = {
  name: string;
  control: any;
  label: string;
  options: any;
};

export function ControllerMultiSelect({
  name,
  control,
  label,
  options,
}: ControllerMultiSelectProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className="flex flex-col gap-1">
          <label className="text-sm">{label}</label>

          <MultiSelect
            options={options}
            value={field.value || []}
            onChange={field.onChange}
            placeholder="Selecionar responsáveis"
          />
        </div>
      )}
    />
  );
}
