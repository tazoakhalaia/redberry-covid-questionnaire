import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  },
  mode: 'no-cors',
})

export default axiosInstance
