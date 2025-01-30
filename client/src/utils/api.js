import axios from "axios";

const API_URL = import.meta.env.VITE_DEV_URL;
const API_KEY = import.meta.env.VITE_STORE_APP_KEY;

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(`${API_URL}${url}`, {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
            },
        });
        return data;
    } catch (error) {
        console.error("API fetch error:", error);
        throw error;
    }
};
