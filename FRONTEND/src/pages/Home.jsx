import Button from "../components/Button";
import Header from "../components/Header";
import Search from "/Search.svg";
import Smile from "/Smile.svg";
import Planet from "/Planet.svg";
import Play from "/Play.svg";
import SquaresFour from "/SquaresFour.svg";
import CardCharacter from "../components/CardCharacter";

import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function Home() {
    const { theme } = useTheme();
    const [filter, setFilter] = useState("All");

    return (
        <div
            className={`${
                theme === "light"
                    ? "text-[var(--color-secondary)]"
                    : "bg-[var(--color-dark)] text-white"
            }`}
        >
            <Header />
            <div>
                <div className="mt-8 px-2">
                    <div className="relative">
                        <input
                            className="w-full rounded-xl border p-2 border-black"
                            type="text"
                            placeholder="Personagem, episídio, localização..."
                        />
                        <img
                            className="absolute top-2 right-3"
                            src={Search}
                            alt="Search"
                        />
                    </div>
                    <div className="xs:hidden s:block my-4">
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
                                <SwiperSlide>
                                    <CardCharacter />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CardCharacter />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CardCharacter />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CardCharacter />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="xs:hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            <CardCharacter />
                            <CardCharacter />
                            <CardCharacter />
                            <CardCharacter />
                            <CardCharacter />
                            <CardCharacter />
                            <CardCharacter />
                            <CardCharacter />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
