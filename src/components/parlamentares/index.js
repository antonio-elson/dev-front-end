import React, { Fragment, Component } from 'react';
import { Image, Table } from 'rbx';
import { Link } from 'react-router-dom'

import Api from '../../services/api.js';
import ApiParlamentar from '../../services/apiParlamentar.js';
import Senador from '../senador/index.js';

class Parlamentares extends Component {

    constructor() {
        super();

        this.state = {
            parlamentares: [],
            parlamentar: {},
        };
    }


   
    handleClick = (it) => {
        const item = it.target.id;
        this.callApi(item)
  
    }

    async callApi(ti) {
        const resp = await ApiParlamentar.get(`/${ti}/comissoes.json`)
        console.log(resp.data)
        this.setState({
            parlamentar: resp.data.MembroComissaoParlamentar
            
        });
    }


    async componentDidMount() {
        const response = await Api.get('')
        //console.log(response.data)
        this.setState({
            parlamentares: response.data.ListaParlamentarEmExercicio.Parlamentares.Parlamentar
            
        });
    }



    render() {

        const { parlamentar, parlamentares } = this.state;
        return (            


            <Fragment>
                <p>{() => parlamentar.Metadados.VersaoServico}</p>
                <Table striped>
                    <Table.Head>
                        <Table.Row>
                            <Table.Heading>Foto</Table.Heading>
                            <Table.Heading>Nome</Table.Heading>
                            <Table.Heading>UF</Table.Heading>
  
        
                        </Table.Row>
                    </Table.Head>
                    <Table.Body>
                        
                        {parlamentares.map((i) => (
                            <Table.Row  key={i.IdentificacaoParlamentar.CodigoParlamentar}>
                               
                                <Table.Cell>
                                    <Link id={i.IdentificacaoParlamentar.CodigoParlamentar} onClick={this.handleClick} >
                                    {i.IdentificacaoParlamentar.NomeCompletoParlamentar}</Link>
                                </Table.Cell>
                                <Table.Cell>{i.IdentificacaoParlamentar.UfParlamentar}</Table.Cell>
                                <Table.Cell>{i.IdentificacaoParlamentar.SiglaPartidoParlamentar}</Table.Cell>
                        
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </Fragment>
        )
    }
}

export default Parlamentares;