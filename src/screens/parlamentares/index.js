import React, { Fragment, useState } from 'react'
import { Column, Section, Title, Container } from 'rbx'

import Header from '../../components/header';
import Parlamentares from '../../components/parlamentares'
import Senador from '../../components/senador'
import Filter from '../../components/filter'
import Senadores from '../../components/senadores'


const ParlamentaresScreen = () => {
    //const [isOpen, setIsOpen] = useState(false);
    
    return (
    <Fragment>
        <Header/>
        <Filter/> 
        <Parlamentares/>
    </Fragment>
    )
}

export default ParlamentaresScreen;