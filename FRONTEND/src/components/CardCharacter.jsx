import Button from "./Button";
import Info from "/Info.svg";
import Pulse from "/Pulse.svg";
import Heart from "../assets/Heart.svg";
import Alien from "/Alien.svg";
import Planet from "/Planet.svg";
import { useTheme } from "../context/ThemeContext";

export default function CardCharacter({
    name,
    status,
    species,
    location,
    image,
}) {
    const { theme } = useTheme();
    return (
        <div
            className={`${
                theme === "light"
                    ? "bg-[#F9F9F9] text-[var(--color-secondary)]"
                    : "bg-[#1A1A1A] text-white"
            } p-4 shadow-md rounded-xl`}
        >
            <div className="rounded-xl">
                <img className="w-full h-auto" src={image} alt="Img" />
            </div>

            <div className="text-base mb-6 relative">
                <h3 className="py-4 font-bold lg:w-[80%] lg:truncate">
                    {name}
                </h3>
                <div className="flex gap-1.5 items-center">
                    <img src={Pulse} alt="Pulso" />
                    {status}
                </div>
                <div className="flex gap-2 items-center">
                    <img
                        className={`${theme === "dark" && "invert"}`}
                        src={Alien}
                        alt="Espécie"
                    />
                    {species}
                </div>
                <div className="flex gap-1 items-center">
                    <img
                        className={`${theme === "dark" && "invert"}`}
                        width={15}
                        height={12}
                        src={Planet}
                        alt="Planeta"
                    />
                    <p className="truncate">{location}</p>
                </div>
                <button className="absolute top-6 right-0">
                    <img src={Heart} alt="Favorito" />
                </button>
            </div>

            <div className="flex justify-end">
                <Button
                    img={Info}
                    alt="Saiba mais"
                    text="Saiba mais"
                    className={`${
                        theme === "dark" && "bg-[var(--color-secondary)]"
                    } bg-[var(--color-primary)] text-white hover:opacity-[0.9]`}
                    onClick={() => console.log("Lista de favoritos")}
                />
            </div>
        </div>
    );
}
