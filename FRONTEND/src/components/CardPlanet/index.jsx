import PlanetDark from "../../assets/Planet.svg";
import PlanetLight from "../../assets/PlanetLight.png";
import Info from "../../assets/Info.svg";
import Heart from "../../assets/HeartFavorite.png";

import { useTheme } from "../../context/ThemeContext";
import Button from "../Button";

export default function CardPlanet() {
    const { theme } = useTheme();
    return (
        <div
            className={`rounded-lg p-3 flex flex-col items-center relative shadow-md ${
                theme === "light" ? "card-light" : "card-dark"
            }`}
        >
            <img
                className="absolute bottom-40"
                style={{ width: "38px", height: "auto" }}
                src={theme === "light" ? PlanetLight : PlanetDark}
                alt=""
            />
            <div className="flex flex-col items-center gap-3 mt-3">
                <div className="text-center">
                    <p>Planet</p>
                    <p className="text-[#11B0C8]">Earth (C-137)</p>
                </div>
                <Button
                    image={Info}
                    text="Saiba mais"
                    className={`button ${theme === "light" ? "" : "dark"}`}
                />
                <img src={Heart} alt="favorite" />
            </div>
        </div>
    );
}
