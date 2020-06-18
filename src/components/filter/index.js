import React from 'react';
import { Field, Label, Control, Input, Button } from 'rbx';

import '../../styles/header.scss'
import '../../styles/filter.scss'

function Filter() { 

    return (
        <>
            <Button.Group id='search' >
                <Button color="ligth">Nome</Button>
                <Button color="ligth">UF</Button>
                <Button color="ligth">Partido</Button>
            </Button.Group>

            <Field horizontal id='search'>                
                <Field.Body>
                    <Control>
                        <Input type="email" placeholder="Pesquisa por nome" />
                    </Control>
                </Field.Body>
            </Field>
        </>
    )
}


export default Filter;