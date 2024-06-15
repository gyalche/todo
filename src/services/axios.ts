import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'content-type': 'Application/json',
  },
});

export default API;
