import React, { Fragment, Component } from 'react';
import { Image, Table, P } from 'rbx';
import { Link } from 'react-router-dom'

import Api from '../../services/api.js';
import ApiParlamentar from '../../services/apiParlamentar.js';
import Senador from '../senador/index.js';

class Parlamentares extends Component {

    constructor() {
        super();

        this.state = {
            parlamentares: [],
            test: {},
            parlamentar: {},
        };
    }


   
    handleClick = (it) => {
        const item = it.target.id;
        alert(`O id do Parlamentar é: ${item}`)
        this.callApi(item)
  
    }

    async callApi(codSen) {
        const resp = await ApiParlamentar.get(`/${codSen}/comissoes.json`)
        console.log(resp.data)
        this.setState({
            parlamentar: resp.data.MembroComissaoParlamentar.Metadados            
        });
    }


    async componentDidMount() {
        const response = await Api.get('')
        //console.log(response.data)
        this.setState({
            parlamentares: response.data.ListaParlamentarEmExercicio.Parlamentares.Parlamentar,
            test: response.data.ListaParlamentarEmExercicio.Metadados
        });
    }



    render() {

        const { parlamentares } = this.state;
        return (            


            <Fragment>

                <Table striped >
                    <Table.Head>
                        <Table.Row>
                            <Table.Heading>Foto</Table.Heading>
                            <Table.Heading>Nome</Table.Heading>
                            <Table.Heading>UF</Table.Heading>
                            <Table.Heading>Partido</Table.Heading>
                            <Table.Heading>Membro de Mesa</Table.Heading>
                            <Table.Heading>Membro de Liderança</Table.Heading>
                            <Table.Heading>Pagina Oficial</Table.Heading>
  
        
                        </Table.Row>
                    </Table.Head>
                    <Table.Body>
                        
                        {parlamentares.map((i) => (
                            <Table.Row  key={i.IdentificacaoParlamentar.CodigoParlamentar}>
                                
                                <Table.Cell><Image.Container size={96}>
                                    <Image className="img" src={i.IdentificacaoParlamentar.UrlFotoParlamentar} />
                                    </Image.Container></Table.Cell>
                                <Table.Cell>
                                    <a href={i.IdentificacaoParlamentar.UrlPaginaParlamentar}id={i.IdentificacaoParlamentar.CodigoParlamentar} onClick={this.handleClick} >
                                    {i.IdentificacaoParlamentar.NomeCompletoParlamentar}</a>
                                </Table.Cell>
                                <Table.Cell>{i.IdentificacaoParlamentar.UfParlamentar}</Table.Cell>
                                <Table.Cell>{i.IdentificacaoParlamentar.SiglaPartidoParlamentar}</Table.Cell>
                                <Table.Cell>{i.IdentificacaoParlamentar.MembroMesa}</Table.Cell>
                                <Table.Cell>{i.IdentificacaoParlamentar.MembroLideranca}</Table.Cell>
                                <Table.Cell><a href={i.IdentificacaoParlamentar.UrlPaginaParlamentar}>Ir para a pagina oficial</a></Table.Cell>
                        
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </Fragment>
        )
    }
}

export default Parlamentares;