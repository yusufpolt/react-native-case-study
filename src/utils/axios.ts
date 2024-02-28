import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 15000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    // 'content-type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(function (config) {
  return config;
});

export default axiosInstance;

axiosInstance.interceptors.response.use(
  (response: any) => {
    return response;
  },
  error => {
    if (error.response.data.message) {
      throw new Error(error.response.data.message);
    } else if (error) {
      throw new Error(error.message);
    }
  },
);
