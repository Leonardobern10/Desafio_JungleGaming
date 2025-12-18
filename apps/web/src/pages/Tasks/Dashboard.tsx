import NewTaskDialog from "@/components/dialog/NewTaskDialog";
import TasksContainer from "@/components/tasks/TasksContainer";
import TodayCalendar from "@/components/TodayCalendar";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Search } from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
  const [searchTitle, setSearchTitle] = useState("");

  return (
    <div className="w-full min-h-screen flex flex-col items-center py-6 px-4 bg-muted/40">
      <TodayCalendar />
      {/* Top Bar */}
      <div className="flex flex-col-reverse sm:flex-row w-full max-w-5xl bg-card border rounded-lg shadow-sm px-6 py-4 items-center gap-4">
        <NewTaskDialog />

        <Separator orientation="vertical" className="h-8" />

        <div className="relative w-full min-w-1/4 max-w-sm">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Pesquisar tarefa..."
            className="pl-10"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
        </div>
      </div>

      {/* Tasks Content */}
      <div className="w-full md:w-7/8 mt-4">
        <TasksContainer searchTitle={searchTitle} />
      </div>
    </div>
  );
}
