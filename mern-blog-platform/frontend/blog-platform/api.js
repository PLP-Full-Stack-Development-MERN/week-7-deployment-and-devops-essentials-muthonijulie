import axios from 'axios';
const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export const fetchPosts = () => API.get('/blogs');
