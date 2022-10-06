import axios from "axios"
export const setup = {
  namaApp: "TOKOPAKEDI",
};
export const baseUrl = "http://localhost:8000/api/"

export const axiosInstance = axios.create({
  baseURL:baseUrl
})