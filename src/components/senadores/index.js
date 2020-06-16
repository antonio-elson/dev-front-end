import React, { Fragment, useState, useEffect } from 'react';
import { Column, List } from 'rbx';
import { push as Menu } from 'react-burger-menu';

import ListSenadores from '../senadores/list';
import ParlamentaresService from '../../services/parlamentares';
import '../../styles/parlamentares.scss'

const Senadores = (props) => {
    //const [parlamentares, setParlamentares] = useState([]);
    //const [current_parlamentares, setCurrentParlamentar] = useState({ NomeParlamentar: "", SiglaPartidoParlamentar: "", CodigoParlamentar: ""});
  
    //const selectParlamentar = (id) => {
    //    const parlamentar = parlamentares.find((parlamentar) => {
    //      return parlamentar._id === id;
    //    })
    //    setCurrentParlamentar(parlamentar);
    //  }
    //

   // useEffect(() => {
   //     fetchParlamentares();
   //   }, []);
   // 
    
 // async function fetchParlamentares() {
//    const response = await ParlamentaresService.index();
 //   if (response.data.length >= 1) {
 //     setParlamentares(response.data)
 //     setCurrentParlamentar(response.data)
 //   }}
    return (
        <Fragment>
            <Column.Group className="parlamentares" id="parlamentares">
                <Menu
                    pageWrapId={"parlamentares-editor"}
                    isOpen={props.isOpen}
                    onStateChange={(state) => props.setIsOpen(state.isOpen)}
                    disableAutoFocus
                    outerContainerId={"parlamentares"}
                    customBurgerIcon={false}
                    customCrossIcon={false}
                >
                    <Column.Group>
                        <Column size={10} offset={1}>
                            Search...
                    </Column>
                    </Column.Group>
                    <ListSenadores/>
                </Menu>


                <Column size={12} className="notes-editor" id="notes-editor">
                    Editor...
        </Column>
              </Column.Group>
        </Fragment>
    )
}

export default Senadores;