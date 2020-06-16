import React, { Fragment, Component } from 'react';
import { Button, Column, Tag, Title, List } from "rbx";
import Api from '../../../services/api'

//import Moment from 'moment';
class ListSenadores extends Component {

  state = {
    parlamentares: [],

  };

  async componentDidMount() {
    const response = await Api.get('')
    console.log(response.data)
    this.setState({
      parlamentares: response.data.ListaParlamentarEmExercicio.Parlamentares.Parlamentar
    });
  }

  render() {

    return (
      <Fragment>
        <Column.Group breakpoint="mobile">
          <Column size={6} offset={1}>
            <Title size={6}>
              {this.state.parlamentares.length} Parlamentares
          </Title>
          </Column>
        </Column.Group>
        <List className="parlamentares-list">
          {this.state.parlamentares.map((item, key) =>
            <List.Item >
              <Title size={6}>
                {item.IdentificacaoParlamentar.NomeParlamentar}
              </Title>
              <Title size={6} subtitle spaced={false}>
                {item.IdentificacaoParlamentar.SiglaPartidoParlamentar}
              </Title>

              <Column.Group breakpoint="mobile">
                <Column size={10}>
                  <Tag color="dark">
                    {item.IdentificacaoParlamentar.UfParlamentar}
                  </Tag>
                </Column>
              </Column.Group>
            </List.Item>
          )}
        </List>
      </Fragment>
    )
  }
}

export default ListSenadores;