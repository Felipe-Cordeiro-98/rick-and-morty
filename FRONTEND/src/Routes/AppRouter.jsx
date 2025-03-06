import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Character from "../pages/character";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/character" element={<Character />} />
        </Routes>
    );
}
