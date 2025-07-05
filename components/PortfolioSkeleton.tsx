import { Skeleton } from "@/components/ui/skeleton";

const PortfolioSkeleton = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="p-4 flex justify-between items-center shadow bg-white sticky top-0 z-10">
        <Skeleton className="h-6 w-24" />
        <div className="flex gap-4">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-16" />
        </div>
      </div>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <Skeleton className="w-32 h-32 rounded-full ring-4 ring-white shadow-xl" />
            </div>

            <Skeleton className="h-10 w-60 mx-auto rounded-md" />

            <div className="space-y-2 max-w-3xl mx-auto">
              <Skeleton className="h-6 w-full mx-auto" />
              <Skeleton className="h-6 w-5/6 mx-auto" />
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {[...Array(5)].map((_, idx) => (
                <Skeleton key={idx} className="h-8 w-20 rounded-md" />
              ))}
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <Skeleton className="h-12 w-40 rounded-md" />
              <Skeleton className="h-12 w-40 rounded-md" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioSkeleton;
