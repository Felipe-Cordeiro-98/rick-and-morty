import Button from "../Button";
import Heart from "../../assets/HeartFavorite.png";
import Info from "../../assets/Info.svg";
import Pulse from "../../assets/Pulse.png";
import AlienDark from "../../assets/AlienDark.png";
import AlienLight from "../../assets/AlienLight.png";
import PlanetDark from "../../assets/Planet.svg";
import PlanetLight from "../../assets/PlanetLight.png";

import { useTheme } from "../../context/ThemeContext";

export default function Card({ image, name, status, species, originName }) {
    const { theme } = useTheme();
    let isTheme = theme === "light" ? true : false;

    const translateStatus = () => {
        if (status === "Alive") return "Vivo";

        if (status === "Dead") {
            return "Morto";
        } else {
            return "unknown";
        }
    };

    const translateSpecie = () => {
        return species === "Human" ? "Humano" : species;
    };

    return (
        <div
            className={`flex flex-col p-3 rounded-lg shadow-md ${
                isTheme ? "card-light" : "card-dark"
            }`}
        >
            <div className="mb-3">
                <img className="w-full" src={image} alt="character" />
            </div>
            <div className="h-full flex flex-col justify-between">
                <div>
                    <h3 className="mb-2 font-bold">{name}</h3>

                    <div>
                        <div className="flex gap-2 items-center">
                            <img
                                className="w-[18px] h-auto"
                                src={Pulse}
                                alt="icon pulse"
                            />
                            <p>{translateStatus()}</p>
                        </div>

                        <div className="flex gap-2 items-center">
                            <img
                                className="w-[18px] h-auto"
                                src={isTheme ? AlienLight : AlienDark}
                                alt="icon pulse"
                            />
                            <p>{translateSpecie()}</p>
                        </div>

                        <div className="flex gap-2 items-center">
                            <img
                                className="w-[18px] h-auto pt-1 self-start"
                                src={isTheme ? PlanetLight : PlanetDark}
                                alt="icon planet"
                            />
                            <p>{originName}</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between mt-3">
                    <Button
                        className={"button"}
                        image={isTheme ? Info : Info}
                        text="Saiba mais"
                    />
                    <div className="ml-2">
                        <img src={Heart} alt="icon heart" />
                    </div>
                </div>
            </div>
        </div>
    );
}
