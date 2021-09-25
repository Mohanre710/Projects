import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/angular-clone-12437/us-central1/api'
});

export default instance;