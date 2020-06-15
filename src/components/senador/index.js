import React, { Fragment, useState } from 'react'
import 
{ Field, Label, Notification, Container, Control, Input, Fieldset, Section, Column, Image } 
from 'rbx';

 function Senador() {
    //const [name, setName] = useState("");
    //const [uf, setUf] = useState("");
    //const [partido, setPartido] = useState("");
    //const [membroMesa, setMembroMesa] = useState("");
    //const [membroLideranca, setMembroLideranca] = useState("");
    //const [linkOficial, setLinkOficial] = useState("");
    //const [comissaoTitular, setComissaoTitular] = useState("");
    //const [comissaoSuplente, setComissaoSuplente] = useState("");
    //const [foto, setFoto] = useState("");

return (
    <Fragment>
        <Section size="medium" className="#">
            <Container>
                <Column.Group>
                    <Column size={5}>
                        <Image.Container size={260}>
                            <Image src="http://www.senado.leg.br/senadores/img/fotos-oficiais/senador945.jpg" />
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
        Pagina do senador
    </Fragment>
)
 }
export default Senador;