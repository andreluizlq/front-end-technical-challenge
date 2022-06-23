import axios from 'axios';

export const storeApi = axios.create({
  baseURL: process.env.REACT_APP_STORE_API
});
