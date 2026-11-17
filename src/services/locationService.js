import api from "./api";

export const getLocations = async (page = 1, signal) => {
    const response = await api.get("/location", {
        params: { page },
        signal,
    });

    return response.data;
};

export const getLocationById = async (id) => {
    const response = await api.get(`/location/${id}`);
    return response.data;
};
