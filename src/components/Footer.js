import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content- between p-3">
                    <Col className="p-0 md={3} sm={12}">
                        Robert Jones Jr.
                    </Col>
                    <Col className="p-0 justify-content-end" md={3}>
                    &copy; Copyright 2020 Site created by Robert Jones Jr.
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;