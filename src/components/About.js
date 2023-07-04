import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import CodingImg from '../images/coder.png';

const About = () => {
    return (
        <Container id="about" style={{ marginTop: '14%' }}>
            <Card className='card'>
                <Card.Header className='text-center'>
                    <h1>About Me</h1>
                </Card.Header>
                <Card.Body>
                    <Row className='row'>
                        <Col md={6}>
                            <Card.Img src={CodingImg} alt='Coder' />
                        </Col>
                        <Col md={6}>
                            I am a beginner front-end developer and I am skilled in
                            HTML,CSS and JavaScript, as well as the React framework.
                            I done my graduation in Information Technology. Currently
                            I am working with a Start-Up oraganisation HestaBit Technology
                            as Trainee Software Engineer. Here I work on Php and Laravel.
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default About;