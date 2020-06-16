import axios from 'axios';

//Conexão com a API
const ApiParlamentar = axios.create({
    baseURL: 'http://legis.senado.leg.br/dadosabertos/senador'
});


export default ApiParlamentar;