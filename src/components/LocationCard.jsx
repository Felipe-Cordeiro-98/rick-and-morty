import PlanetIcon from "../assets/icons/planet.svg";
import InfoIcon from "../assets/icons/info.svg";
import HeartIcon from "../assets/icons/heartFavorite.svg";
import HeartFilledIcon from "../assets/icons/heartFavoriteFilled.svg";

import IconLink from "./IconLink";
import IconButton from "./IconButton";

import { useState } from "react";

export default function LocationCard({ data }) {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div className="relative flex flex-col items-center gap-4 p-4 bg-[#f1f1f1] rounded-2xl">
            <img className="absolute -top-6.5 w-12 h-12" src={PlanetIcon} alt="" />
            <div className="mt-2 text-center">
                <h3 className="font-bold">{data.type}</h3>
                <p className="text-primary">{data.name}</p>
            </div>

            <IconLink
                icon={InfoIcon}
                text="Saiba mais"
                to={`/locations/${data.id}`}
                className="text-white bg-primary"
            />

            <IconButton
                icon={isFavorite ? HeartFilledIcon : HeartIcon}
                iconSize={48}
                className=""
                onClick={() => setIsFavorite(!isFavorite)}
            />
        </div>
    );
}
