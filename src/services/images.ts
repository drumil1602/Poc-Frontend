import axios from 'axios';


export const getAllImages = async () => {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_BASE_URL}/images`);
    return response;
}