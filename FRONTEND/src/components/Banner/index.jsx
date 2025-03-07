import LogoA from "../../assets/LogoA.png";
import Heart from "../../assets/Heart.png";
import Sun from "../../assets/Sun.png";
import Moon from "../../assets/Moon.png";
import MoonLight from "../../assets/MoonLight.png";

import LightImageBanner from "../../assets/HighLightImage.png";
import DarkImageBanner from "../../assets/HighDarkImage.png";
import Button from "../Button";

import { useTheme } from "../../context/ThemeContext";

export default function Banner() {
    const { theme, themeToggle } = useTheme();

    return (
        <div
            className={`w-full min-h-screen flex flex-col justify-evenly md:justify-start ${
                theme === "dark" ? "theme-dark" : "theme-light"
            }`}
        >
            <div className="h-[100px] flex items-center px-3 py-4 md:justify-between lg:px-30">
                <a href="/">
                    <img src={LogoA} alt="logo rick and morty" />
                </a>
                <div className="hidden md:block md:text-xl lg:text-base">
                    <Button
                        image={Heart}
                        alt={"icon"}
                        text="Lista de favoritos"
                        className="button light"
                    />
                </div>
            </div>

            <div className="w-full min-h-[calc(100vh-100px)] flex flex-col-reverse justify-evenly items-center lg:flex-row lg:px-30">
                <div className="w-full text-center lg:text-left lg:w-1/2">
                    <div className="p-4 lg:p-0">
                        <h3 className="text-2xl font-bold md:text-5xl">
                            Saiba tudo em <br className="hidden lg:block" /> um
                            só <span className="text-[#11B0C8]">lugar.</span>
                        </h3>
                        <p className="py-3 md:text-xl lg:text-base">
                            Personagens, localizações, episódios e muito mais.
                        </p>

                        <div className="flex justify-center gap-3 py-3 md:text-xl lg:text-base lg:justify-start">
                            <Button
                                image={theme === "light" ? Moon : MoonLight}
                                text="Escuro"
                                theme={theme === "dark" ? "light" : "dark"}
                                click={() => themeToggle("dark")}
                                className={`button w-[150px] ${
                                    theme === "light" ? "" : "light"
                                }`}
                            />
                            <Button
                                image={Sun}
                                text="Claro"
                                theme={
                                    theme === "dark" ? "light dark" : "light"
                                }
                                click={() => themeToggle("light")}
                                className={`button w-[150px] ${
                                    theme === "light" ? "light" : "dark"
                                }`}
                            />
                        </div>
                        {theme === "light" ? (
                            <p className="text-[#11B0C8] md:text-xl lg:text-base">
                                Wubba Lubba Dub Dub! Cuidado com os olhos.
                            </p>
                        ) : (
                            <p className="text-[#11B0C8] md:text-xl lg:text-base">
                                Ai sim, Porr#@%&*
                            </p>
                        )}
                    </div>
                </div>

                <div className="lg:w-1/2 lg:h-[calc(100vh-100px)]">
                    <img
                        className={`lg:w-full lg:h-full ${
                            theme === "light"
                                ? "image-banner-light"
                                : "image-banner-dark"
                        }`}
                        src={
                            theme === "light"
                                ? LightImageBanner
                                : DarkImageBanner
                        }
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}
