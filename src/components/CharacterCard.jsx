import PulseIcon from "../assets/icons/pulse.svg";
import AlienIcon from "../assets/icons/alien.svg";
import PlanetIcon from "../assets/icons/planet.svg";
import HeartIcon from "../assets/icons/heartFavorite.svg";
import HeartFilledIcon from "../assets/icons/heartFavoriteFilled.svg";
import InfoIcon from "../assets/icons/info.svg";

import IconButton from "./IconButton";
import { useState } from "react";

export default function CharacterCard({
    image = "/img.png",
    name = "Rick Sanchez",
    status = "Vivo",
    specie = "Humano",
    locationName = "Earth",
}) {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div className="min-w-70 p-4 bg-[#f1f1f1] rounded-lg">
            {/* character image */}
            <div className="w-65 h-50 overflow-hidden rounded-2xl">
                <img className="w-full h-full object-cover" src={image} alt="" />
            </div>

            <div className="relative">
                {/* character name */}
                <h3 className="max-w-52 my-4 font-bold">{name}</h3>

                {/* favorite button */}
                <IconButton
                    icon={isFavorite ? HeartFilledIcon : HeartIcon}
                    iconSize={48}
                    className="absolute -top-3 right-0"
                    onClick={() => setIsFavorite(!isFavorite)}
                />

                {/* character info */}
                <div className="mb-6">
                    <div className="flex gap-1">
                        <img src={PulseIcon} alt="" width={16} height={16} />
                        <p>{status}</p>
                    </div>
                    <div className="flex gap-1">
                        <img src={AlienIcon} alt="" width={16} height={16} />
                        <p>{specie}</p>
                    </div>
                    <div className="flex gap-1">
                        <img src={PlanetIcon} alt="" width={16} height={16} />
                        <p>{locationName}</p>
                    </div>
                </div>

                {/* learn more */}
                <div className="flex justify-end">
                    <IconButton icon={InfoIcon} text="Saiba mais" className="bg-primary text-white" />
                </div>
            </div>
        </div>
    );
}
