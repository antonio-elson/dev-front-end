import React, { Fragment, Component } from 'react';
import { Table } from 'rbx';
import { Link } from 'react-router-dom'

import apiAtual from '../../api.js';

class Parlamentares extends Component {

    state = {
        parlamentares: []
        
    };

    async componentDidMount() {
        const response = await apiAtual.get('')
        console.log(response.data)
                this.setState({
                    parlamentares: response.data.ListaParlamentarEmExercicio.Parlamentares.Parlamentar
                });
            }
        

render() {
     
return (

    <Fragment>
        <Table striped>
            <Table.Head>
                <Table.Row>
                    <Table.Heading>Nome</Table.Heading>
                    <Table.Heading>UF</Table.Heading>
                    <Table.Heading>Partido</Table.Heading>
                </Table.Row>
            </Table.Head>
            <Table.Body>
                {this.state.parlamentares.map((i) => (
                    <Table.Row key={i.IdentificacaoParlamentar.CodigoParlamentar}>
                        <Table.Cell><Link>{i.IdentificacaoParlamentar.NomeCompletoParlamentar}</Link></Table.Cell>
                        <Table.Cell>{i.IdentificacaoParlamentar.UfParlamentar}</Table.Cell>
                        <Table.Cell>{i.IdentificacaoParlamentar.SiglaPartidoParlamentar}</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
        Lista dos parlamentares
    </Fragment>
)
}
}

export default Parlamentares;