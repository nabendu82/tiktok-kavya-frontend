import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tiktok-kavya-backend.onrender.com"
})

export default instance