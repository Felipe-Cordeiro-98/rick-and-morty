import axios from "axios";

const api = axios.create({
    baseURL: "https://rickandmortyapi.com/api",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            console.error("Erro HTTP:", error.response.status);
        } else if (error.request) {
            console.error("Servidor não respondeu:", error.message);
        } else {
            console.error("Erro na requisição:", error.message);
        }

        return Promise.reject(error);
    },
);

export default api;
