import Button from "../components/Button";
import Header from "../components/Header";
import Search from "/Search.svg";
import Smile from "/Smile.svg";
import Planet from "/Planet.svg";
import Play from "/Play.svg";
import SquaresFour from "/SquaresFour.svg";
import CardCharacter from "../components/CardCharacter";
import api from "../services/api";

import { useTheme } from "../context/ThemeContext";
import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function Home() {
    const { theme } = useTheme();
    const [filter, setFilter] = useState("All");
    const [character, setCharacter] = useState([]);

    const getCharacter = async () => {
        try {
            const response = await api.get("/character");
            setCharacter(response.data.results);
        } catch (err) {
            console.error("Error searching for character", err);
        }
    };

    useEffect(() => {
        getCharacter();
    }, []);

    return (
        <div
            className={`${
                theme === "light"
                    ? "text-[var(--color-secondary)]"
                    : "bg-[var(--color-dark)] text-white"
            } lg:flex lg:flex-col lg:items-center`}
        >
            <Header />
            <div className="md:w-[85%]">
                <div className="mt-8 px-2 lg:flex lg:justify-between lg:items-center">
                    <div className="relative">
                        <input
                            className={`${
                                theme === "light"
                                    ? "border-[var(--color-secondary)]"
                                    : ""
                            } w-full rounded-3xl border p-2 lg:w-[380px]`}
                            type="text"
                            placeholder="Personagem, episídio, localização..."
                        />
                        <img
                            className="absolute top-2 right-3"
                            src={Search}
                            alt="Search"
                        />
                    </div>
                    <div className="xs:hidden s:block my-4 lg:flex lg:items-center lg:gap-3">
                        Filtrar por:
                        <div className="flex gap-1 justify-center mt-2">
                            <Button
                                img={Smile}
                                alt="Personagens"
                                text="Personagens"
                                className="bg-[var(--color-primary)] text-white hover:opacity-[0.9]"
                                onClick={() => setFilter("Character")}
                            />
                            <Button
                                img={Planet}
                                alt="Localizações"
                                text="Localizações"
                                className="bg-[var(--color-primary)] text-white hover:opacity-[0.9]"
                                onClick={() => setFilter("Location")}
                            />
                            <Button
                                img={Play}
                                alt="Episódeos"
                                text="Episódeos"
                                className="bg-[var(--color-primary)] text-white hover:opacity-[0.9]"
                                onClick={() => setFilter("Episode")}
                            />
                        </div>
                    </div>
                </div>

                {/* Character */}
                <div className="px-2 xs:mt-8">
                    <div className="flex gap-2 items-center xs:mb-8">
                        <h3 className="font-bold text-xl">Personagens</h3>
                        <Button
                            img={SquaresFour}
                            alt="Ver todos"
                            text="Ver todos"
                            className="bg-[var(--color-primary)] text-white hover:opacity-[0.9]"
                            onClick={() => console.log("Lista de favoritos")}
                        />
                    </div>

                    <div className="xs:flex xs:gap-4 xs:flex-col">
                        <div className="sm:hidden">
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={16}
                                slidesPerView={1}
                                navigation
                            >
                                {character.slice(0, 8).map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <CardCharacter
                                            name={item.name}
                                            species={item.species}
                                            status={item.status}
                                            location={item.location.name}
                                            image={item.image}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="xs:hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {character.slice(0, 8).map((item) => (
                                <CardCharacter
                                    key={item.id}
                                    name={item.name}
                                    species={item.species}
                                    status={item.status}
                                    location={item.location.name}
                                    image={item.image}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Episodes */}
                <div className="px-2 xs:mt-8">
                    <div className="flex gap-2 items-center xs:mb-8">
                        <h3 className="font-bold text-xl">Episódios</h3>
                        <Button
                            img={SquaresFour}
                            alt="Ver todos"
                            text="Ver todos"
                            className="bg-[var(--color-primary)] text-white hover:opacity-[0.9]"
                            onClick={() => console.log("Lista de favoritos")}
                        />
                    </div>

                    <div className="xs:flex xs:gap-4 xs:flex-col"></div>
                </div>
            </div>
        </div>
    );
}
