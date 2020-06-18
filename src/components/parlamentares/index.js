import React, { Fragment, Component } from 'react';
import { Table, Card, Content, Title, Field, Label, Notification, Container, Control, Input, Fieldset, Section, Column, Image } from 'rbx';

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

    async callApi(codSen) {
        const { parlamentar } = this.state
        const resp = await ApiParlamentar.get(`/${codSen}/comissoes.json`)
        //console.log(resp.data)
        this.setState({
            parlamentar: resp.data.MembroComissaoParlamentar.Parlamentar.IdentificacaoParlamentar
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

        const { parlamentares, parlamentar } = this.state;
        return (

            <Fragment>
                <Section size="medium" className="">
                    <Container>
                        <Column.Group>
                            <Column size={5}>
                                <Table striped >
                                    <Table.Head>
                                        <Table.Row>
                                            <Table.Heading>Nome</Table.Heading>
                                            <Table.Heading>UF</Table.Heading>
                                            <Table.Heading>Partido</Table.Heading>
                                        </Table.Row>
                                    </Table.Head>
                                    <Table.Body>
                                        {parlamentares.map((i) => (
                                            <Table.Row nome2={i.IdentificacaoParlamentar.CodigoParlamentar}>
                                                <Table.Cell>
                                                    <a id={i.IdentificacaoParlamentar.CodigoParlamentar} onClick={this.handleClick}>
                                                        {i.IdentificacaoParlamentar.NomeParlamentar}</a>
                                                </Table.Cell>
                                                <Table.Cell>
                                                    {i.IdentificacaoParlamentar.UfParlamentar}
                                                </Table.Cell>
                                            </Table.Row>
                                        ))}
                                    </Table.Body>
                                </Table>
                            </Column>
                            <Column size={8} offset={0}>
                                <Section size="medium" className="#">
                                    <Container>
                                        <Column.Group>
                                            <Column size={4}>
                                                <Image.Container size={1256}>
                                                    <Image src={parlamentar.UrlFotoParlamentar} />
                                                </Image.Container>
                                            </Column>
                                            <Column size={8}>
                                                <Container fluid>
                                                <Card>
                                                     <Card.Header>
                                                       <Card.Header.Title>{parlamentar.NomeParlamentar}-{parlamentar.UfParlamentar}</Card.Header.Title>
                                                     </Card.Header>
                                                     <Card.Content>
                                                       <Content>
                                                           <Table striped >
                                                              <Table.Body>
                                                                  <Table.Row>
                                                                  <Table.Cell>Nome: </Table.Cell>                                                 
                                                                  <Table.Cell>{parlamentar.NomeCompletoParlamentar} </Table.Cell>                                                 
                                                                  </Table.Row>
                                                                  <Table.Row>
                                                                  <Table.Cell>UF: </Table.Cell>
                                                                  <Table.Cell>{parlamentar.UfParlamentar} </Table.Cell>                                                                                                        
                                                                  </Table.Row>
                                                                  <Table.Row>
                                                                  <Table.Cell>Partido: </Table.Cell> 
                                                                  <Table.Cell>{parlamentar.SiglaPartidoParlamentar} </Table.Cell>                                                                                                                                                              
                                                                  </Table.Row><Table.Row>
                                                                  <Table.Cell>Email: </Table.Cell> 
                                                                  <Table.Cell>{parlamentar.EmailParlamentar} </Table.Cell>                                                                                                                                                              
                                                                  </Table.Row><Table.Row>
                                                                  <Table.Cell>Site Oficial: </Table.Cell> 
                                                                  <Table.Cell><a href={parlamentar.UrlPaginaParlamentar}>Clique aqui. </a> </Table.Cell>                                                                                                               
                                                                  </Table.Row>                                                                
                                                              </Table.Body>
                                                           </Table>  
                                                        </Content>
                                                    </Card.Content>
                                                    </Card>
                                                </Container>                                 
                                            </Column>
                                        </Column.Group>
                                    </Container>
                                </Section>
                            </Column>
                      </Column.Group>
                    </Container>
                </Section>                
            </Fragment>
        )
    }
}
                
export default Parlamentares;

