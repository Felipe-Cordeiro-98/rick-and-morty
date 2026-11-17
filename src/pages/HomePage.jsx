import HeartIcon from "../assets/icons/heart.svg";
import SunIcon from "../assets/icons/sun.svg";
import MoonIcon from "../assets/icons/moon.svg";
import SmileyIcon from "../assets/icons/smiley.svg";
import PlanetIcon from "../assets/icons/planet.svg";
import PlayIcon from "../assets/icons/play.svg";
import MagnifyingGlassIcon from "../assets/icons/magnifyingGlass.svg";
import SquaresFourIcon from "../assets/icons/squaresFour.svg";
import ArrowCircleUpIcon from "../assets/icons/arrowCircleUp.svg";

import Logo from "../assets/logoA.png";
import HeroLight from "../assets/heroLight.png";

import IconLink from "../components/IconLink";
import IconButton from "../components/IconButton";
import CharacterCard from "../components/CharacterCard";
import EpisodeCard from "../components/EpisodeCard";
import LocationCard from "../components/LocationCard";
import Footer from "../components/Footer";

import { Link } from "react-router";
import { useCharacters } from "../hooks/useCharacters";
import { useEpisodes } from "../hooks/useEpisodes";
import { useLocations } from "../hooks/useLocations";

export default function Home() {
    const { characters } = useCharacters();
    const { episodes } = useEpisodes();
    const { locations } = useLocations();

    return (
        <>
            <div id="hero" className="min-h-screen flex flex-col">
                <header className="flex justify-between items-center px-6 py-4">
                    <Link to="/">
                        <img className="w-50 h-auto" src={Logo} alt="Rick and Morty" />
                    </Link>

                    <IconLink icon={HeartIcon} text="Lista de favoritos" to="/" className="bg-primary text-white" />
                </header>
                <div className="grow flex border-b-2 border-primary">
                    <div className="grow w-1/2 flex flex-col justify-center items-center">
                        <div>
                            <div className="mb-16">
                                <h1 className="text-5xl font-bold mb-6">
                                    Saiba tudo em <br /> um só <span className="text-primary">lugar.</span>
                                </h1>
                                <p className="text-[#313234]">Personagens, localizações, episódios e muito mais.</p>
                            </div>
                            <div>
                                <div className="flex gap-1 mb-6">
                                    <IconButton icon={MoonIcon} text="Escuro" />
                                    <IconButton icon={SunIcon} text="Claro" className="bg-primary text-white" />
                                </div>
                                <p className="text-primary">Wubba Lubba Dub Dub! Cuidado com os olhos.</p>
                            </div>
                        </div>
                    </div>

                    <div className="grow w-1/2">
                        <img className="w-auto h-full object-contain mx-auto" src={HeroLight} alt="Rick and Morty" />
                    </div>
                </div>
            </div>

            <div className="px-10">
                <main className="mb-20">
                    <div className="flex justify-between items-center my-16">
                        <div className="min-w-100 relative select-none">
                            <input
                                className="w-full pl-4 pr-14 py-2 border rounded-4xl"
                                type="text"
                                placeholder="Personagem, eposódio, localização..."
                            />
                            <img
                                className="absolute top-1/2 right-4 -translate-y-1/2"
                                src={MagnifyingGlassIcon}
                                alt=""
                                width={32}
                                height={32}
                            />
                        </div>

                        <div className="flex items-center gap-3">
                            <p>Filtrar por:</p>

                            <div className="flex gap-3">
                                <IconButton icon={SmileyIcon} text="Personagens" className="bg-primary text-white" />
                                <IconButton icon={PlanetIcon} text="Localizações" />
                                <IconButton icon={PlayIcon} text="Episódios" />
                            </div>
                        </div>
                    </div>

                    {/* characters */}
                    <section className="mb-16">
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-2xl font-bold">Personagens</h2>
                            <IconButton icon={SquaresFourIcon} text="Ver Todos" className="bg-primary text-white" />
                        </div>

                        {/* cards */}
                        <div className="grid grid-cols-4 gap-4">
                            {characters.slice(0, 8).map((character) => (
                                <CharacterCard
                                    key={character.id}
                                    image={character.image}
                                    name={character.name}
                                    specie={character.species}
                                    locationName={character.origin.name}
                                />
                            ))}
                        </div>
                    </section>

                    {/* episodes */}
                    <section className="mb-16">
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-2xl font-bold">Episódios</h2>
                            <IconButton icon={SquaresFourIcon} text="Ver Todos" className="bg-primary text-white" />
                        </div>

                        {/* cards */}
                        <div className="grid grid-cols-4 gap-4">
                            {episodes.slice(0, 4).map((episode) => (
                                <EpisodeCard key={episode.id} data={episode} />
                            ))}
                        </div>
                    </section>

                    {/* locations */}
                    <section className="mb-20">
                        <div className="flex items-center gap-4 mb-10">
                            <h2 className="text-2xl font-bold">Localizações</h2>
                            <IconButton icon={SquaresFourIcon} text="Ver Todos" className="bg-primary text-white" />
                        </div>

                        {/* cards */}
                        <div className="grid grid-cols-5 gap-4">
                            {locations.slice(0, 5).map((location) => (
                                <LocationCard key={location.id} data={location} />
                            ))}
                        </div>
                    </section>

                    <div className="flex justify-between items-center">
                        <img className="w-auto h-12" src={Logo} alt="Rick and Morty" />

                        <a href="#hero" className="flex items-center gap-2">
                            <p>Voltar ao topo</p>
                            <img src={ArrowCircleUpIcon} alt="" />
                        </a>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
