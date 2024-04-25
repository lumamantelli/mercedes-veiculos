import axios from "axios";

const api = axios.create({
    baseURL: "https://my-json-server.typicode.com/lumamantelli/mercedes-veiculos-api"
});

export default api;