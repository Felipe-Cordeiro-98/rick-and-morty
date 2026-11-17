import Skeleton from "../ui/Skeleton";

export default function CharacterCardSkeleton() {
    return (
        <div className="min-w-70 p-4 bg-[#f1f1f1] rounded-lg">
            {/* Character image */}
            <Skeleton className="w-full h-55 rounded-2xl" />

            <div className="relative">
                {/* Character name */}
                <Skeleton className="w-40 h-5 my-4" />

                {/* Favorite button */}
                <Skeleton className="absolute -top-3 right-0 w-12 h-12 rounded-full" />

                {/* Character info */}
                <div className="mb-6 space-y-2">
                    <Skeleton className="w-24 h-4" />
                    <Skeleton className="w-28 h-4" />
                    <Skeleton className="w-36 h-4" />
                </div>

                {/* Learn more */}
                <div className="flex justify-end">
                    <Skeleton className="w-28 h-9 rounded-md" />
                </div>
            </div>
        </div>
    );
}
