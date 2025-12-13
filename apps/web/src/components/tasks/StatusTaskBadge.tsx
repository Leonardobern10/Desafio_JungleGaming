import type { StatusTaskType } from "@/types/StatusTaskType";
import { Badge } from "../ui/badge";

export default function StatusTaskBadge({
  status,
}: {
  status: StatusTaskType;
}) {
  return (
    <Badge
      variant="outline"
      className="py-1 px-2 font-medium tracking-wider bg-gray-300/70 text-neutral-700 text-xs"
    >
      {status}
    </Badge>
  );
}
