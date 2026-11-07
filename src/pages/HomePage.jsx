import IconButton from "../components/IconButton";
import IconLink from "../components/IconLink";
import HeartIcon from "../assets/icons/heart.svg";
import SunIcon from "../assets/icons/sun.svg";
import MoonIcon from "../assets/icons/moon.svg";
import Logo from "../assets/logoA.png";
import HeroLight from "../assets/heroLight.png";

import { Link } from "react-router";

export default function Home() {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <header className="flex justify-between items-center px-6 py-4">
                    <Link to="/">
                        <img className="w-50 h-auto" src={Logo} alt="Rick and Morty" />
                    </Link>

                    <IconLink
                        icon={HeartIcon}
                        text="Lista de favoritos"
                        to="/"
                        className="bg-primary text-white"
                    />
                </header>
                <div className="grow flex border-b border-primary">
                    <div className="grow w-1/2 flex flex-col justify-center items-center">
                        <div>
                            <div className="mb-16">
                                <h1 className="text-5xl font-bold mb-6">
                                    Saiba tudo em <br /> um só <span className="text-primary">lugar.</span>
                                </h1>
                                <p className="text-[#313234]">Personagens, localizações, eposódios e muito mais.</p>
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

            <main></main>
        </>
    );
}
