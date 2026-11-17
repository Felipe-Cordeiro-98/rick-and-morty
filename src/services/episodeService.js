import api from "./api";

export const getEpisodes = async () => {
    const response = await api.get("/episode");
    return response.data;
};

export const getEpisodeById = async (id) => {
    const response = await api.get(`/episode/${id}`);
    return response.data;
};
