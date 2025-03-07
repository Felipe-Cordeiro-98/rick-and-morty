import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Character from "../pages/character";
import Layout from "../components/Layout";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<Layout />}>
                <Route path="/character" element={<Character />} />
            </Route>
        </Routes>
    );
}
