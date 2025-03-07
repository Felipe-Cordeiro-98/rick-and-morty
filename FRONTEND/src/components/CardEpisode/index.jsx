import Button from "../Button";
import { useTheme } from "../../context/ThemeContext";

import Play from "../../assets/Play.png";
import PlayLight from "../../assets/PlayLight.png";
import Info from "../../assets/Info.svg";
import Heart from "../../assets/HeartFavorite.png";

export default function CardEpisode({ name, episode }) {
    const { theme } = useTheme();

    return (
        <div
            className={`rounded-lg p-3 shadow-md lg:basis-90 lg:grow  ${
                theme === "light" ? "card-light" : "card-dark"
            }`}
        >
            <div className="flex gap-2 ">
                <img
                    style={{ width: "auto", height: "24px" }}
                    src={theme === "dark" ? Play : PlayLight}
                    alt="icon play"
                />
                <p className="text-base mb-3 lg:text-base">
                    {name} | {episode}
                </p>
            </div>
            <div className="flex justify-between">
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
