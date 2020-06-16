import axios from 'axios';

//Conexão com a API
const Api = axios.create({
    baseURL: 'http://legis.senado.leg.br/dadosabertos/senador/lista/atual.json'
});


export default Api;