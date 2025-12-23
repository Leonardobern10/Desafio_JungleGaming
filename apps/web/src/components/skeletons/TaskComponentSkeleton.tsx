import { Skeleton } from "../ui/skeleton";

export default function TaskComponentSkeleton() {
  return (
    <div className="sm:w-5/6 flex flex-col gap-y-5 h-50 rounded-xl bg-neutral-400/50 p-4 px-6">
      <div className="flex flex-col">
        <Skeleton className="w-5/6 h-7 rounded-full" />
        <Skeleton className="skeleton-item" />
      </div>
      <div className="w-full flex justify-start gap-x-2">
        <Skeleton className="skeleton-item" />
        <Skeleton className="skeleton-item" />
      </div>
      <div>
        <Skeleton className="skeleton-item" />
      </div>
    </div>
  );
}
