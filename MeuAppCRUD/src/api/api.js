import axios from 'axios';

const api = axios.create({
  baseURL: "https://beauty-realm-counts-zen.trycloudflare.com",
});

export default api;
