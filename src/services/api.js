import axios from 'axios';

import { endpoint } from './consts';

const api = axios.create({     
    baseURL:`${endpoint}`     
});

export default api;