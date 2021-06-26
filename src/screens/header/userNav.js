import React from 'react';
import { Navbar,Container, Nav } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

export default function UserNav() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/"><FormattedMessage id='home.title' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/"><FormattedMessage id='home.title' /></Nav.Link>
                        <Nav.Link href="/login"><FormattedMessage id='home.login' /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}