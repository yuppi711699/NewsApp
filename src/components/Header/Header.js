import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';

function Header(){
    return(
        <Container>
            <Navbar bg="light">

                <Navbar.Brand>Story book</Navbar.Brand>
            </Navbar>
        </Container>
    )
};
export default Header;