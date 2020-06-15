import React, { Fragment } from 'react';
import { Column, Section, Title, Container} from 'rbx'
import { Link } from 'react-router-dom'

import Header from '../../components/header';
import presentationImage from '../../assets/images/presentation.png';
import "../../styles/home.scss";


const HomeScreen = () => (
    <Fragment>
        <Header/>
        <Section size="medium" className="home">
            <Container>
              <Column.Group>
                <Column size={5}>
                    <Title size={2} spaced className="has-text-white">
                        dfdkfjkdfas desfio jfornte end 
                    </Title>
                    <Title size={5} spaced className="has-text-light" subtitle>
                        Lorema kldija d dsaif klasjdfkajsodfuioas jdkfjiasd flkdsjfas dfijasdf
                    </Title>
                    <Title>
                        <Link to='/parlamentares' className="button is-outlined is-white is-large">
                            <strong>Ir para a pagina do Desafio</strong>
                        </Link>
                    </Title>
                </Column>
                <Column size={6} offset={1}>
                    <img src={presentationImage} />
                </Column>
              </Column.Group>
            </Container>
        </Section>
    </Fragment>
)

export default HomeScreen;