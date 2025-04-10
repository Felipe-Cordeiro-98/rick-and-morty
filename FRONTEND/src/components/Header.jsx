import Button from "./Button";
import Logo from "/LogoA.svg";
import Favorite from "/LogoFavorite.svg";
import RickAndMorty from "../assets/RickAndMorty.svg";
import Rick from "../assets/Rick.png";
import Moon from "../assets/Moon.svg";
import MoonDark from "../assets/MoonDark.svg";
import Sun from "../assets/Sun.svg";

import { useTheme } from "../context/ThemeContext";

export default function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <header
            className={`w-full h-svh md:flex md:justify-center ${
                theme === "light"
                    ? "bg-white text-[var(--color-secondary)]"
                    : "bg-black text-white"
            }`}
        >
            <div className="w-full h-full flex flex-col justify-between md:w-[85%] md:pt-3">
                <div className="w-full h-[60px] flex justify-between items-center px-2">
                    <img
                        className="w-[140px] md:w-[220px]"
                        src={Logo}
                        alt="Logo"
                    />
                    <Button
                        img={Favorite}
                        alt="Lista de favoritos"
                        text="Lista de favoritos"
                        className="bg-[var(--color-primary)] text-white hover:opacity-[0.9]"
                        onClick={() => console.log("Lista de favoritos")}
                    />
                </div>

                <div className="w-full h-full flex flex-col justify-evenly lg:flex-row-reverse lg:items-center">
                    <div className="flex justify-center xs:h-[260px] s:h-[380px] min-[390px]:h-auto md:h-full">
                        <img
                            className="w-auto h-full"
                            src={`${theme === "light" ? RickAndMorty : Rick}`}
                            alt="Rick and Morty"
                        />
                    </div>
                    <div className="md:h-1/3 lg:h-auto lg:w-1/2">
                        <div className="xs:text-center lg:text-left">
                            <h2 className="font-bold xs:text-xl s:text-2xl min-[390px]:text-3xl md:text-5xl lg:mb-5">
                                Saiba tudo em<br className="hidden lg:block" />
                                um só{" "}
                                <span className="text-[var(--color-primary)]">
                                    lugar.
                                </span>
                            </h2>
                            <p className="xs:text-sm min-[390px]:text-base md:text-xl">
                                Personagens, localizações, episódios e muito
                                mais.
                            </p>
                        </div>

                        <div className="flex gap-3 xs:justify-center xs:py-2 s:py-4 min-[390px]:py-6 md:py-12 lg:justify-start">
                            <Button
                                img={`${theme === "light" ? Moon : MoonDark}`}
                                alt="Modo Escuro"
                                text="Escuro"
                                className={`${
                                    theme === "dark" &&
                                    "bg-[var(--color-primary)]"
                                } hover:opacity-[0.9]`}
                                onClick={() => toggleTheme("dark")}
                            />
                            <Button
                                img={Sun}
                                alt="Modo Claro"
                                text="Claro"
                                className={`${
                                    theme === "light"
                                        ? "bg-[var(--color-primary)] text-white"
                                        : "bg-[var(--color-secondary)]"
                                } hover:opacity-[0.9]`}
                                onClick={() => toggleTheme("light")}
                            />
                        </div>
                        <div className="xs:text-center xs:text-sm s:text-base md:text-lg md:pb-3 lg:text-left">
                            <p className="text-[var(--color-primary)]">
                                {theme === "light"
                                    ? "Wubba Lubba Dub Dub! Cuidado com os olhos."
                                    : "Ai sim, Porr#@%&*"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
