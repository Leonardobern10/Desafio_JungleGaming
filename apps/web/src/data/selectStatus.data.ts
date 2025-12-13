import type { SelectType } from "@/types/SelectStatusType";
import { StatusTaskType } from "@/types/StatusTaskType";

export const selectStatusValues: SelectType<StatusTaskType>[] = [
  { name: "Todo", value: StatusTaskType.TODO },
  { name: "Review", value: StatusTaskType.REVIEW },
  { name: "In progress", value: StatusTaskType.IN_PROGRESS },
  { name: "Done", value: StatusTaskType.DONE },
];

export const statusOptions: SelectType<StatusTaskType>[] = [
  { name: "A fazer", value: StatusTaskType.TODO },
  { name: "Em andamento", value: StatusTaskType.IN_PROGRESS },
  { name: "Revisão", value: StatusTaskType.REVIEW },
  { name: "Feito", value: StatusTaskType.DONE },
];
