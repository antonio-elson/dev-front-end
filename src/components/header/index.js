import React from 'react';
import { Navbar, Container, Button } from 'rbx';
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
          <Link to="/">
            <img src={logoImage} />
          </Link>
          <Navbar.Burger
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar-menu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Navbar.Burger>
        </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Segment as="div" className="navbar-item navbar-start" align="start">
          <Navbar.Item as="div">
            <Button
              className="open-button"
              color="white"
              outlined
              onClick={() => props.setIsOpen(true)}>
              <FontAwesomeIcon icon={faList} />
            </Button>
          </Navbar.Item>
        </Navbar.Segment>
      
        <Navbar.Segment as="div" className="navbar-item navbar-end" align="right">
            Item 1
        </Navbar.Segment>
      </Navbar.Menu>
    </Container>
  </Navbar>
  )
}


export default Header;