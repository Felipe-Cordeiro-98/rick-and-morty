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
import { useState, useEffect } from "react";
import { api } from "../../services/api";

export default function Home() {
    const { theme } = useTheme();
    const navigate = useNavigate();
    const [characters, setCharacters] = useState([]);
    const [episodes, setEpisodes] = useState([]);
    const [locations, setLocations] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        loadCharacter();
        loadEpisode();
        loadLocation();
    }, []);

    const toggleFilter = (newFilter) => {
        if (newFilter === filter) {
            setFilter("");
        } else {
            setFilter(newFilter);
        }
    };

    const loadCharacter = async () => {
        try {
            const response = await api.get("/character");
            setCharacters(response.data.results);
        } catch (error) {
            console.error("Erro ao buscar personagens:", error);
        }
    };

    const loadEpisode = async () => {
        try {
            const response = await api.get("/episode");
            setEpisodes(response.data.results);
        } catch (error) {
            console.error("Erro ao buscar episódios:", error);
        }
    };

    const loadLocation = async () => {
        try {
            const response = await api.get("/location");
            setLocations(response.data.results);
        } catch (error) {
            console.error("Erro ao buscar localizações:", error);
        }
    };

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
                                } ${filter === "character" && "active"}`}
                                click={() => toggleFilter("character")}
                            />
                            <Button
                                image={theme === "dark" ? Planet : PlanetLight}
                                text="Localizações"
                                className={`button ${
                                    theme === "dark"
                                        ? "link-dark"
                                        : "link-light"
                                } ${filter === "location" && "active"}`}
                                click={() => toggleFilter("location")}
                            />
                            <Button
                                image={theme === "dark" ? Play : PlayLight}
                                text="Episódios"
                                className={`button ${
                                    theme === "dark"
                                        ? "link-dark"
                                        : "link-light"
                                } ${filter === "episode" && "active"}`}
                                click={() => toggleFilter("episode")}
                            />
                        </div>
                    </div>
                </div>

                <div
                    className={`lg:mt-6 ${
                        filter !== "character" && filter !== "" && "hidden"
                    }`}
                >
                    <div className="flex items-center gap-4 mt-10 mb-5">
                        <p className="font-bold">Personagens</p>
                        <Button
                            image={All}
                            text="Ver todos"
                            alt="ver todos"
                            className={`button ${
                                theme === "light" ? "light" : "link-dark"
                            }`}
                            click={navigateToCharacterPage}
                        />
                    </div>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3">
                        {characters.slice(0, 8).map((character) => (
                            <Card
                                key={character.id}
                                image={character.image}
                                name={character.name}
                                status={character.status}
                                species={character.species}
                                originName={character.origin.name}
                            />
                        ))}
                    </div>
                </div>
                <div
                    className={`${
                        filter !== "episode" && filter !== "" && "hidden"
                    }`}
                >
                    <div className="flex items-center gap-4 mt-10 mb-5">
                        <p className="font-bold">Episódios</p>
                        <Button
                            image={All}
                            text="Ver todos"
                            alt="ver todos"
                            className={`button ${
                                theme === "light" ? "light" : "link-dark"
                            }`}
                        />
                    </div>
                    <div className="grid grid-cols1 gap-4 m-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-none lg:flex lg:flex-wrap">
                        {episodes.slice(0, 6).map((episode) => (
                            <CardEpisode
                                key={episode.id}
                                name={episode.name}
                                episode={episode.episode}
                            />
                        ))}
                    </div>
                </div>
                <div
                    className={`${
                        filter !== "location" && filter !== "" && "hidden"
                    }`}
                >
                    <div className="flex items-center gap-4 mt-10 mb-8">
                        <p className="font-bold">Localizações</p>
                        <Button
                            image={All}
                            text="Ver todos"
                            alt="ver todos"
                            className={`button ${
                                theme === "light" ? "light" : "link-dark"
                            }`}
                        />
                    </div>
                    <div className="grid grid-cols1 gap-4 gap-y-8 sm:grid-cols-2 md:grid-cols-4">
                        {locations.slice(0, 8).map((location) => (
                            <CardPlanet
                                key={location.id}
                                type={location.type}
                                name={location.name}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-between my-8">
                    <img src={LogoA} alt="logo" />

                    <button
                        className="flex items-center cursor-pointer hover:text-[#11b0c8]"
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                    >
                        Voltar ao topo
                        <img
                            src={theme === "dark" ? ArrowUpDark : ArrowUpLight}
                            alt="voltar ao topo"
                        />
                    </button>
                </div>
            </div>
            <hr className="w-[95%] m-auto" />
            <Footer />
        </div>
    );
}
