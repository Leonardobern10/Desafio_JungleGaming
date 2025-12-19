import { Calendar } from "./ui/calendar";

export default function TodayCalendar() {
  const today = new Date();
  return (
    <Calendar
      mode="single"
      selected={today}
      className="rounded-md border shadow-sm w-full md:w-1/4 mb-5"
      captionLayout="dropdown"
    />
  );
}
