import React from 'react';
import { Field, Label, Control, Input, Button } from 'rbx';

import '../../styles/header.scss'

function Filter() {

    return (
        <div>
            <Button.Group>
                <Button color="ligth">Nome</Button>
                <Button color="ligth">Partido</Button>
                <Button color="ligth">UF</Button>
            </Button.Group>

            <Field horizontal>
                <Field.Label>
                    <Label>Pesquisa</Label>
                </Field.Label>
                <Field.Body>
                    <Control>
                        <Input type="email" placeholder="Pesquisa por nome" />
                    </Control>
                </Field.Body>
            </Field>
        </div>
    )
}


export default Filter;