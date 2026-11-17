import api from "./api";

export const getCharacters = async () => {
    const response = await api.get("/character");
    return response.data;
};

export const getCharacterById = async (id) => {
    const response = await api.get(`/character/${id}`);
    return response.data;
};
