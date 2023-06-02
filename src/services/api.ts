import axios from "axios";

const version = 'v1';

const api = axios.create({
  baseURL: `https://646e938b09ff19b1208617dd.mockapi.io/api/${version}`,
});

export default api;