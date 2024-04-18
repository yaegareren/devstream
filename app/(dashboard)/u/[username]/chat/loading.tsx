import { Skeleton } from "@/components/ui/skeleton";
import { TogglecardSkeleton } from "./_components/toggle-card";

const ChatLoading = () => {
  return (
    <>
      <div className="p-6 space-y-4">
        <Skeleton className="h-10 w-[200px]" />
        <div className="space-y-4">
          <TogglecardSkeleton />
          <TogglecardSkeleton />
          <TogglecardSkeleton />
        </div>
      </div>
    </>
  );
};

export default ChatLoading;
