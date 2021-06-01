import axios from "axios";
import EncryptedStorage from "react-native-encrypted-storage";


const axiosInstance = axios.create({
  baseURL: "http://10.0.2.2:8000/api",
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'accept': 'application/json'
  }
});

axiosInstance.interceptors.request.use(
  async config => {
    const token = await EncryptedStorage.getItem('token')
    if (token) {
      config.headers.Authorization = "Bearer "+token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default axiosInstance
