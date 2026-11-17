import { useEffect, useState } from "react";
import { getLocations } from "../services/locationService";

export const useLocations = (page = 1) => {
    const [locations, setLocations] = useState([]);
    const [info, setInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchLocations = async () => {
            try {
                setLoading(true);
                setError(null);

                const data = await getLocations(page, controller.signal);

                setLocations(data.results);
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

        fetchLocations();

        return () => controller.abort();
    }, [page]);

    return {
        locations,
        info,
        loading,
        error,
    };
};
