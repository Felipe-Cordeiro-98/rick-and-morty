import Skeleton from "../ui/Skeleton";

export default function EpisodeCardSkeleton() {
    return (
        <div className="flex flex-col gap-3 p-4 bg-[#f1f1f1] rounded-2xl">
            <div>
                <Skeleton className="w-55 h-6 mb-2" />
                <Skeleton className="w-24 h-6" />
            </div>

            <div className="flex justify-between items-center">
                <Skeleton className="w-30 h-10" />
                <Skeleton className="w-12 h-12" />
            </div>
        </div>
    );
}
