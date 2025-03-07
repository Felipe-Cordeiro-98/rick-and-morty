import Image from "../../assets/Image.png";
import Heart from "../../assets/Heart.png";
import Play from "../../assets/Play.png";
import PlayLight from "../../assets/PlayLight.png";
import Pulse from "../../assets/Pulse.png";
import AlienDark from "../../assets/AlienDark.png";
import AlienLight from "../../assets/AlienLight.png";
import PlanetDark from "../../assets/Planet.svg";
import PlanetLight from "../../assets/PlanetLight.png";

import { useTheme } from "../../context/ThemeContext";
import CardPlanet from "../../components/CardPlanet";

export default function Character() {
    const { theme } = useTheme();
    let isTheme = theme === "light" ? true : false;

    let species = "Humano";

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
        <div className="h-[calc(100vh-100px)] flex flex-col justify-between p-3">
            <div>
                <div className="rounded-lg shadow-md">
                    <img className="w-full h-auto" src={Image} alt="image" />
                </div>

                <div className="flex items-center justify-between my-5">
                    <h3 className="font-bold text-2xl">Rick Sanchez</h3>
                    <img src={Heart} alt="heart" />
                </div>

                <div>
                    <div className="flex items-center gap-2">
                        <img
                            className="w-[24px] h-auto"
                            src={theme === "light" ? PlayLight : Play}
                            alt="play"
                        />
                        <p className="text-lg">Participa de 61 episódios</p>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <img
                                className="w-[24px] h-auto"
                                src={Pulse}
                                alt="icon pulse"
                            />
                            <p className="text-lg">{translateStatus()}</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <img
                                className="w-[24px] h-auto"
                                src={isTheme ? AlienLight : AlienDark}
                                alt="icon pulse"
                            />
                            <p className="text-lg">{translateSpecie()}</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <img
                                className="w-[24px] h-auto"
                                src={isTheme ? PlanetLight : PlanetDark}
                                alt="icon planet"
                            />
                            <p className="text-lg">{"C-(2330)"}</p>
                        </div>
                    </div>
                </div>
            </div>
            <CardPlanet />
            <CardPlanet />
        </div>
    );
}
