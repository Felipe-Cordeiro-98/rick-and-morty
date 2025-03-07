import { Outlet } from "react-router-dom";
import Header from "../Header";

import { useTheme } from "../../context/ThemeContext";

export default function Layout() {
    const { theme } = useTheme();
    return (
        <div className={`${theme === "light" ? "theme-light" : "theme-dark"} w-full h-screen`}>
            <Header />
            <div>
                <Outlet />
            </div>
        </div>
    );
}
