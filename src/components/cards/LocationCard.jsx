import PlanetIcon from "../../assets/icons/planet.svg";
import InfoIcon from "../../assets/icons/info.svg";
import HeartIcon from "../../assets/icons/heartFavorite.svg";
import HeartFilledIcon from "../../assets/icons/heartFavoriteFilled.svg";

import IconLink from "../ui/IconLink";
import IconButton from "../ui/IconButton";

import { useState } from "react";

export default function LocationCard({ id, name, type }) {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div className="relative flex flex-col items-center gap-4 p-4 bg-[#f1f1f1] rounded-2xl">
            <img className="absolute -top-6.5 w-12 h-12" src={PlanetIcon} alt="" />
            <div className="mt-2 text-center">
                <h3 className="font-bold">{type}</h3>
                <p className="text-primary">{name}</p>
            </div>

            <IconLink icon={InfoIcon} text="Saiba mais" to={`/locations/${id}`} className="text-white bg-primary" />

            <IconButton
                icon={isFavorite ? HeartFilledIcon : HeartIcon}
                iconSize={48}
                onClick={() => setIsFavorite(!isFavorite)}
            />
        </div>
    );
}
