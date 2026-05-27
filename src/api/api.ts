import axios from "axios";

const api = axios.create({
  baseURL: "https://564pfrpj-8000.inc1.devtunnels.ms/",
 
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    
    if (error.response.status_code === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await axios.post('/auth/refresh_token', { refreshToken });
        const { token } = response.data;

        localStorage.setItem('token', token);

       
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return axios(originalRequest);
      } catch (error) {
       
      }
    }

    return Promise.reject(error);
  }
);


export default api;