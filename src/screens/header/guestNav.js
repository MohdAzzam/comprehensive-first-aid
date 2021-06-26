import React from 'react';
import { Navbar,Container, Nav } from 'react-bootstrap';
import ChangeLang from './changLang';
import {FormattedMessage} from 'react-intl'; 

export default function GuestNav() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                <FormattedMessage id='home.title'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/login"><FormattedMessage id='home.login' /></Nav.Link>
                        <Nav.Link href="/register"><FormattedMessage id='home.register' /></Nav.Link>
                        
                        <ChangeLang />

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}