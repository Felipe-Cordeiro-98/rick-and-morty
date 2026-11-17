import { useEffect, useState } from "react";
import { getCharacters } from "../services/characterService";

export const useCharacters = (page = 1) => {
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchCharacters = async () => {
            try {
                setLoading(true);
                setError(null);

                const data = await getCharacters(page, controller.signal);

                setCharacters(data.results);
                setInfo(data.info);
            } catch (error) {
                if (!controller.signal.aborted) {
                    setError(error);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        };

        fetchCharacters();

        return () => {
            controller.abort();
        };
    }, [page]);

    return {
        characters,
        info,
        loading,
        error,
    };
};
