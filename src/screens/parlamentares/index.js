import React, { Fragment, useState } from 'react'
import { Column, Section, Title, Container } from 'rbx'

import Header from '../../components/header';
//import Parlamentares from '../../components/parlamentares'
//import Senador from '../../components/senador'
import Senadores from '../../components/senadores'


const ParlamentaresScreen = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
    <Fragment>
        <Header setIsOpen={setIsOpen}/>
        <Senadores setIsOpen={setIsOpen} isOpen={isOpen}/>

    </Fragment>
    )
}

export default ParlamentaresScreen;