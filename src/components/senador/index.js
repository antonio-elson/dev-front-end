import React, { Fragment, Component } from 'react'
import handlClick from './../parlamentares'
import { Field, Label, Notification, Container, Control, Input, Fieldset, Section, Column, Image }
    from 'rbx';

import Parlamentares from '../parlamentares'

class Senador extends Component {


    render() {

        return (
            <Fragment>
                <Section size="medium" className="#">
                    <Container>
                        <Column.Group>
                            <Column size={5}>
                                <Image.Container size={260}>
                                    <Image src="" />
                                </Image.Container>
                            </Column>
                            <Column size={8}>
                                <Container fluid>
                                    <Notification>
                                        <Fieldset disabled>
                                            <Field horizontal>
                                                <Field.Label size="normal">
                                                    <Label>Nome:</Label>
                                                </Field.Label>
                                                <Field.Body>
                                                    <Control>
                                                        <Input type="text" placeholder="" />
                                                    </Control>
                                                </Field.Body>
                                            </Field>
                                            <Field horizontal>
                                                <Field.Label size="normal">
                                                    <Label>Nome:</Label>
                                                </Field.Label>
                                                <Field.Body>
                                                    <Control>
                                                        <Input type="text" placeholder="Fulaninho de tal" />
                                                    </Control>
                                                </Field.Body>
                                            </Field>
                                            <Field horizontal>
                                                <Field.Label size="normal">
                                                    <Label>Nome:</Label>
                                                </Field.Label>
                                                <Field.Body>
                                                    <Control>
                                                        <Input type="text" placeholder="Fulaninho de tal" />
                                                    </Control>
                                                </Field.Body>
                                            </Field>
                                            <Field horizontal>
                                                <Field.Label size="normal">
                                                    <Label>Nome:</Label>
                                                </Field.Label>
                                                <Field.Body>
                                                    <Control>
                                                        <Input type="text" placeholder="Fulaninho de tal" />
                                                    </Control>
                                                </Field.Body>
                                            </Field>
                                        </Fieldset>
                                    </Notification>
                                </Container>
                            </Column>
                        </Column.Group>
                    </Container>
                </Section>
            </Fragment>
        )
    }
}

export default Senador;