import Button from "../Button";
import { useTheme } from "../../context/ThemeContext";

import Play from "../../assets/Play.png";
import PlayLight from "../../assets/PlayLight.png";
import Info from "../../assets/Info.svg";
import Heart from "../../assets/HeartFavorite.png";

export default function CardEpisode() {
    const { theme } = useTheme();

    return (
        <div
            className={`rounded-lg p-3 shadow-md ${
                theme === "light" ? "card-light" : "card-dark"
            }`}
        >
            <p className="flex gap-2 text-lg mb-3 lg:text-base">
                <img src={theme === "dark" ? Play : PlayLight} alt="" /> Pilot | S01E01
            </p>
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
