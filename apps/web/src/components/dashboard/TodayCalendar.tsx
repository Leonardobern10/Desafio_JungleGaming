import { Calendar } from "../ui/calendar";

export default function TodayCalendar() {
  const today = new Date();
  return (
    <Calendar
      mode="single"
      selected={today}
      className="rounded-md border shadow-sm [--cell-size:--spacing(8)] md:[--cell-size:--spacing(10)] mb-5 text-secondary/80 bg-primary"
      captionLayout="dropdown"
      disableNavigation
    />
  );
}
