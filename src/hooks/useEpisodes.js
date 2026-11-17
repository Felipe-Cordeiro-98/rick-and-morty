import { useEffect, useState } from "react";
import { getEpisodes } from "../services/episodeService";

export const useEpisodes = (page = 1) => {
    const [episodes, setEpisodes] = useState([]);
    const [info, setInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchEpisodes = async () => {
            try {
                setLoading(true);
                setError(null);

                const data = await getEpisodes(page, controller.signal);

                setEpisodes(data.results);
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

        fetchEpisodes();

        return () => controller.abort();
    }, [page]);

    return {
        episodes,
        info,
        loading,
        error,
    };
};
