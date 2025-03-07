import LogoA from "../../assets/LogoA.png";
import Heart from "../../assets/Heart.png";

import Button from "../Button";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    const navigateToFavorite = () => {
        navigate("/favorites")
    }

    return (
        <header className="h-[100px] flex items-center justify-between sm:border px-3 lg:px-30">
            <div>
                <img src={LogoA} alt="logo" />
            </div>
            <div className="hidden sm:block">
                <Button
                    className="button light hover:opacity-2"
                    image={Heart}
                    text="Lista de favoritos"
                    click={navigateToFavorite}
                />
            </div>
        </header>
    );
}
