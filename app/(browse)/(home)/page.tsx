import { Suspense } from "react";
import { ResultSkeleton, Results } from "./_components/results";

export default function Page() {
  return (
    <>
      <div className="h-full p-8 mx-auto max-w-screen-2xl">
        <Suspense fallback={<ResultSkeleton />}>
          <Results />
        </Suspense>
      </div>
    </>
  );
}
