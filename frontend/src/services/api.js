import axios from "axios"

export const api = axios.create({
    baseURL: "http://localhost:8000/api/"
})

export const getIcs = async url => await api.get(url)

export const getAdvisors = async url => await api.get(url)