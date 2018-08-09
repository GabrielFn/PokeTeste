import axios from 'axios';

let baseURL = 'https://pokeapi.co/api/v2';

const axiosInstance = axios.create({
  timeout: 40000,
  baseURL,
});

export default axiosInstance;
