import PlanetIcon from "../../assets/icons/planet.svg";
import Skeleton from "../ui/Skeleton";

export default function LocationCardSkeleton() {
    return (
        <div className="relative flex flex-col items-center gap-4 p-4 bg-[#f1f1f1] rounded-2xl">
            <img className="absolute -top-6.5 w-12 h-12" src={PlanetIcon} alt="" />

            <div className="mt-2 text-center">
                <Skeleton className="w-25 h-5 mb-2" />
                <Skeleton className="w-26 h-5" />
            </div>

            <Skeleton className="w-30 h-10" />
            <Skeleton className="w-12 h-12" />
        </div>
    );
}
