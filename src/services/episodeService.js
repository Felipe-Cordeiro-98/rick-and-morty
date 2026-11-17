import api from "./api";

export const getEpisodes = async (page = 1, signal) => {
    const response = await api.get("/episode", {
        params: { page },
        signal,
    });

    return response.data;
};

export const getEpisodeById = async (id) => {
    const response = await api.get(`/episode/${id}`);
    return response.data;
};
