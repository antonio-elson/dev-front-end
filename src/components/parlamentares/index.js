import React, { Fragment, Component } from 'react';
import { Image, Table } from 'rbx';
import { Link } from 'react-router-dom'

import Api from '../../services/api.js';
import ApiParlamentar from '../../services/apiParlamentar.js';

class Parlamentares extends Component {

    constructor() {
        super();

        this.state = {
            parlamentar: {},
            parlamentares: [],
        };
    }


   
    handleClick = (it) => {
        const item = it.target.id;
        console.log(item)
            const response = ApiParlamentar.get(`/${item}/comissoes.json`)
            //console.log(response.data)
            this.setState({
                parlamentar: response.data
                
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

 

        const { parlamentares } = this.state;
        return (


            <Fragment>
                <Table striped>
                    <Table.Head>
                        <Table.Row>
                            <Table.Heading>Foto</Table.Heading>
                            <Table.Heading>Nome</Table.Heading>
                            <Table.Heading>UF</Table.Heading>
                            <Table.Heading>Partido</Table.Heading>
                            <Table.Heading>Membro de Mesa</Table.Heading>
                            <Table.Heading>Membro de Liderança</Table.Heading>
                            <Table.Heading>Link Oficial</Table.Heading>
                        </Table.Row>
                    </Table.Head>
                    <Table.Body>
                        {this.state.parlamentares.map((i) => (
                            <Table.Row  key={i.IdentificacaoParlamentar.CodigoParlamentar}>
                                <Table.Cell><Image.Container size={128}>
                                    <Image src={i.IdentificacaoParlamentar.UrlFotoParlamentar} />
                                 </Image.Container>{i.IdentificacaoParlamentar.SiglaPartidoParlamentar}</Table.Cell>
                                <Table.Cell>
                                    <Link id={i.IdentificacaoParlamentar.CodigoParlamentar} onClick={this.handleClick} >
                                    {i.IdentificacaoParlamentar.NomeCompletoParlamentar}</Link>
                                </Table.Cell>
                                <Table.Cell>{i.IdentificacaoParlamentar.UfParlamentar}</Table.Cell>
                                <Table.Cell>{i.IdentificacaoParlamentar.SiglaPartidoParlamentar}</Table.Cell>
                                <Table.Cell>{i.IdentificacaoParlamentar.MembroMesa}</Table.Cell>
                                <Table.Cell>{i.IdentificacaoParlamentar.MembroLideranca}</Table.Cell>
                                <Table.Cell>
                                    <a href={i.IdentificacaoParlamentar.UrlPaginaParlamentar}>Ir para a pagina oficial</a>
                                    </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </Fragment>
        )
    }
}

export default Parlamentares;