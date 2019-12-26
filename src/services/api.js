import axios from 'axios';

axios.defaults.withCredentials = true;

const api = axios.create({
  baseURL: process.env.VUE_APP_NETWORK_API
});

export default api;