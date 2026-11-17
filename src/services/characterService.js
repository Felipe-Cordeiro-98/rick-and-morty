import api from "./api";

export const getCharacters = async (page = 1, signal) => {
    const response = await api.get("/character", {
        params: { page },
        signal,
    });

    return response.data;
};

export const getCharacterById = async (id) => {
    const response = await api.get(`/character/${id}`);
    return response.data;
};
