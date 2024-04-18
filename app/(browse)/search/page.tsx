import { redirect } from "next/navigation";
import { Results, ResultsSkeleon } from "./_components/results";
import { Suspense } from "react";

interface SearchPageProps {
  searchParams: {
    term?: string;
  };
}

const SearchPage = ({ searchParams }: SearchPageProps) => {
  if (!searchParams.term) {
    redirect("/");
  }

  return (
    <>
      <div className="h-full p-8 max-w-screen-2xl mx-auto">
        <Suspense fallback={<ResultsSkeleon />}>
          <Results term={searchParams.term} />
        </Suspense>
      </div>
    </>
  );
};

export default SearchPage;
