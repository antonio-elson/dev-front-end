import React from 'react';
import { Navbar, Container, Button, Image } from 'rbx';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

import logoImage from '../../assets/images/logo.png';
import '../../styles/header.scss';

function Header(props) {

  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <Link >
            <Image.Container size={128}>
              <Image src={logoImage} />
            </Image.Container>
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}


export default Header;