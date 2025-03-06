import Banner from "../../components/Banner";
import Button from "../../components/Button";
import Card from "../../components/Card";
import All from "../../assets/All.png";
import Smiley from "../../assets/Smiley.png";
import SmileyLight from "../../assets/SmileyLight.png";
import Planet from "../../assets/Planet.svg";
import PlanetLight from "../../assets/PlanetLight.png";
import Play from "../../assets/Play.png";
import PlayLight from "../../assets/PlayLight.png";
import LupaLight from "../../assets/LupaLight.png";
import LupaDark from "../../assets/LupaDark.png";
import CardPlanet from "../../components/CardPlanet";
import CardEpisode from "../../components/CardEpisode";
import LogoA from "../../assets/LogoA.png";
import ArrowUpDark from "../../assets/ArrowCircleUpDark.png";
import ArrowUpLight from "../../assets/ArrowCircleUpLight.png";
import Footer from "../../components/Footer";

import { useTheme } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const { theme } = useTheme();
    const navigate = useNavigate();

    // personagem
    const navigateToCharacterPage = () => {
        navigate("/character");
    };

    return (
        <div className={theme === "dark" ? "theme-dark-gray" : "theme-light"}>
            <Banner />
            <div className="px-3 lg:px-10 lg:pt-10">
                <div className="flex flex-col my-6 md:my-0 md:flex-row md:justify-between md:items-center">
                    <div className="flex justify-center md:justify-start">
                        <input
                            className={`w-[370px] h-[38px] px-5 rounded-full border absolute ${
                                theme === "light" ? "input-light" : "input-dark"
                            }`}
                            type="text"
                            placeholder="Personagem, episódio, localização..."
                        />
                        <img
                            className="relative left-38 top-[3px] md:left-80"
                            src={theme === "light" ? LupaLight : LupaDark}
                            alt="lupa"
                        />
                    </div>

                    <div className="flex flex-col lg:flex-row lg:items-center lg:gap-2">
                        <p className="pt-4 lg:pt-0">Filtrar por:</p>
                        <div className="flex gap-2">
                            <Button
                                image={theme === "dark" ? Smiley : SmileyLight}
                                text="Personagens"
                                className={`button ${
                                    theme === "dark"
                                        ? "link-dark"
                                        : "link-light"
                                }`}
                            />
                            <Button
                                image={theme === "dark" ? Planet : PlanetLight}
                                text="Localizações"
                                className={`button ${
                                    theme === "dark"
                                        ? "link-dark"
                                        : "link-light"
                                }`}
                            />
                            <Button
                                image={theme === "dark" ? Play : PlayLight}
                                text="Episódios"
                                className={`button ${
                                    theme === "dark"
                                        ? "link-dark"
                                        : "link-light"
                                }`}
                            />
                        </div>
                    </div>
                </div>

                <div className="lg:mt-6">
                    <div className="flex items-center gap-4 mt-10 mb-5">
                        <p className="font-bold">Personagens</p>
                        <Button
                            image={All}
                            text="Ver todos"
                            alt="ver todos"
                            className={`button ${
                                theme === "light" ? "light" : "dark"
                            }`}
                            click={navigateToCharacterPage}
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-4 mt-10 mb-5">
                        <p className="font-bold">Episódios</p>
                        <Button
                            image={All}
                            text="Ver todos"
                            alt="ver todos"
                            className={`button ${
                                theme === "light" ? "light" : "dark"
                            }`}
                        />
                    </div>
                    <div className="grid grid-cols1 gap-4 m-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5">
                        <CardEpisode />
                        <CardEpisode />
                        <CardEpisode />
                        <CardEpisode />
                        <CardEpisode />
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-4 mt-10 mb-8">
                        <p className="font-bold">Localizações</p>
                        <Button
                            image={All}
                            text="Ver todos"
                            alt="ver todos"
                            className={`button ${
                                theme === "light" ? "light" : "dark"
                            }`}
                        />
                    </div>
                    <div className="grid grid-cols1 gap-4 gap-y-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
                        <CardPlanet />
                        <CardPlanet />
                        <CardPlanet />
                        <CardPlanet />
                        <CardPlanet />
                        <CardPlanet />
                        <CardPlanet />
                    </div>
                </div>
                <div className="flex items-center justify-between my-8">
                    <img src={LogoA} alt="logo" />

                    <div className="flex items-center gap-1 h-[40px] cursor-pointer hover:underline">
                        <span>Voltar ao topo</span>

                        <img
                            src={theme === "dark" ? ArrowUpDark : ArrowUpLight}
                            alt="voltar ao topo"
                        />
                    </div>
                </div>
            </div>
            <hr className="w-[95%] m-auto" />
            <Footer />
        </div>
    );
}
