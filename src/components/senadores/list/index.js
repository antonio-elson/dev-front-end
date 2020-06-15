import React, { Fragment } from 'react';
import { Button, Column, Tag, Title, List } from "rbx";

//import Moment from 'moment';

function ListSenadores(props) {
  return (
    <Fragment>
      <Column.Group breakpoint="mobile">
        <Column size={6} offset={1}>
          <Title size={6}>
            {props.parlamentares.length} Parlamentares
          </Title>
        </Column>
      </Column.Group>
      <List className="parlamentares-list">
        {props.parlamentares.map((item, key) =>
          <List.Item key={key} onClick={() => props.selectParlamentar(item._id)} active={item == props.current_parlamentar}>
            <Title size={6}>
              {item.NomeParlamentar}
            </Title>
            <Title size={6} subtitle spaced={false}>
              {item.SiglaPartidoParlamentar}
            </Title>

            <Column.Group breakpoint="mobile">
              <Column size={10}>
                <Tag color="dark">
                  {item.UfParlamentar}
                </Tag>
              </Column>
            </Column.Group>
          </List.Item>
        )}
      </List>
    </Fragment>
  )
}

export default ListSenadores;