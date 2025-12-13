import type { BadgesContainerProps } from "@/types/props/BadgesContainerProps";
import PriorityTaskBadge from "./PriorityTaskBadge";
import StatusTaskBadge from "./StatusTaskBadge";

export default function BadgesContainer({
  priority,
  status,
}: BadgesContainerProps) {
  return (
    <div className="w-fit flex justify-end gap-x-4 self-start">
      <PriorityTaskBadge priority={priority} />
      <StatusTaskBadge status={status} />
    </div>
  );
}
