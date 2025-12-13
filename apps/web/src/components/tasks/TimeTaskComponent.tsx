import type { TimeTaskComponentProps } from "@/types/props/TimeTaskComponentProps";
import { LuCalendarClock } from "react-icons/lu";
export default function TimeTaskComponent({
  dueDate,
  color,
}: TimeTaskComponentProps) {
  return (
    <div className="h-fit text-sm text-neutral-600 flex flex-row items-center leading-8 gap-x-2">
      <LuCalendarClock className={`${color}`} size={20} />
      <p className="font-bold">Prazo:</p>
      <p className="font-bold">
        {dueDate ? new Date(dueDate).toLocaleDateString("pt-BR") : "Indefinido"}
      </p>
    </div>
  );
}
