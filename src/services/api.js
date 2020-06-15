import axios from 'axios';

//Conexão com a API
const Api = axios.create({
    baseURL: 'http://localhost:3000/api.json'
});


export default Api;