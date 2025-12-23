import { useClock } from "@/hooks/useClock";

export default function Clock() {
  const hour = useClock();
  return <p className="text-muted-foreground text-2xl">{hour}</p>;
}
