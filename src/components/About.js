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
                        <Col md={6} className='text-center mt-3'>
                            I am a beginner front-end developer with skills
                            in HTML, CSS, and JavaScript, including the React
                            framework. I have recently graduated in Information
                            Technology. Currently, I am working as a Trainee
                            Software Engineer at HestaBit Technologies. In my
                            role, I primarily work with PHP and Laravel.
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default About;