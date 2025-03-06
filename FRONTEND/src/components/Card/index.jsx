import Button from "../Button";
import Image from "../../assets/image.png";
import Pulse from "../../assets/Pulse.png";
import Heart from "../../assets/HeartFavorite.png";
import Info from "../../assets/Info.svg";
import AlienDark from "../../assets/AlienDark.png";
import AlienLight from "../../assets/AlienLight.png";
import PlanetDark from "../../assets/Planet.svg";
import PlanetLight from "../../assets/PlanetLight.png";

import { useTheme } from "../../context/ThemeContext";

export default function Card({
    image = Image,
    altImage,
    title = "Rick Sanchez",
}) {
    const { theme } = useTheme();

    return (
        <div
            className={`rounded-lg p-3 shadow-md ${
                theme === "light" ? "card-light" : "card-dark"
            }`}
        >
            <div className="pb-3">
                <img className="w-full" src={image} alt={altImage} />
            </div>

            <div className="flex justify-between py-3">
                <div>
                    <p className="font-bold">{title}</p>
                    <p className="flex gap-1 items-center">
                        <img src={Pulse} alt="pulse" /> Vivo
                    </p>
                    <p className="flex gap-1 items-center">
                        <img
                            src={theme === "light" ? AlienLight : AlienDark}
                            alt="alien"
                        />
                        Humano
                    </p>
                    <p className="flex gap-1 items-center">
                        <img style={{width: "16px", height: "auto"}} src={theme === "light" ? PlanetLight : PlanetDark} alt="planet" />
                        Earth (C-127)</p>
                </div>
                <div>
                    <img src={Heart} alt="favorite" />
                </div>
            </div>

            <div className="w-full flex justify-end">
                <Button
                    image={Info}
                    text="Saiba mais"
                    className={`button ${theme === "light" ? "" : "dark"}`}
                />
            </div>
        </div>
    );
}
