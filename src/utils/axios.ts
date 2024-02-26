import axios from 'axios';


const instance = axios.create({
//   baseURL: BASE_API_URL,
  timeout: 15000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    // 'content-type': 'application/json',
  },
});

instance.interceptors.request.use(function (config) {
  return config;
});

export default instance;

instance.interceptors.response.use(
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
