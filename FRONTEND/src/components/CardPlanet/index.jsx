import PlanetDark from "../../assets/Planet.svg";
import PlanetLight from "../../assets/PlanetLight.png";
import Info from "../../assets/Info.svg";
import Heart from "../../assets/HeartFavorite.png";

import { useTheme } from "../../context/ThemeContext";
import Button from "../Button";

export default function CardPlanet({ type, name }) {
    const { theme } = useTheme();
    return (
        <div
            className={`flex flex-col items-center relative rounded-lg p-3 shadow-md md:h-[210px] ${
                theme === "light" ? "card-light" : "card-dark"
            }`}
        >
            <img
                className="absolute bottom-29 md:bottom-48"
                style={{ width: "38px", height: "auto" }}
                src={theme === "light" ? PlanetLight : PlanetDark}
                alt=""
            />
            <div className="w-full h-full flex flex-col justify-center items-center gap-3 mt-3">
                <div className="text-center">
                    <p>{type}</p>
                    <p className="text-[#11B0C8]">{name}</p>
                </div>
                <div className="w-full flex justify-around md:flex-col md:items-center md:gap-3">
                    <Button
                        image={Info}
                        text="Saiba mais"
                        className={`button ${theme === "light" ? "" : "dark"}`}
                    />
                    <img src={Heart} alt="favorite" />
                </div>
            </div>
        </div>
    );
}
