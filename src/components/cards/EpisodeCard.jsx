import PlayIcon from "../assets/icons/play.svg";
import InfoIcon from "../assets/icons/info.svg";
import HeartIcon from "../assets/icons/heartFavorite.svg";
import HeartFilledIcon from "../assets/icons/heartFavoriteFilled.svg";

import { useState } from "react";
import IconButton from "./ui/IconButton";
import IconLink from "./ui/IconLink";

export default function EpisodeCard({ data }) {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div className="p-4 bg-[#f1f1f1] rounded-2xl">
            <div className="mb-2">
                <h3 className="font-bold truncate">{data.name}</h3>
                <div className="flex items-center gap-2">
                    <img className="w-6 h-6" src={PlayIcon} alt="" />
                    <p className="text-sm text-gray-600">{data.episode}</p>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <IconLink
                    icon={InfoIcon}
                    text="Saiba mais"
                    to={`/episodes/${data.id}`}
                    className="text-white bg-primary"
                />
                <IconButton
                    icon={isFavorite ? HeartFilledIcon : HeartIcon}
                    iconSize={48}
                    className=""
                    onClick={() => setIsFavorite(!isFavorite)}
                />
            </div>
        </div>
    );
}
