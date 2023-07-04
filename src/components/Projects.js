import React, { useEffect, useState } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { MyProjects } from '../constants/ProjectData';

const Projects = () => {
    const [Project, setProject] = useState([]);

    useEffect(() => {
        setProject(MyProjects);
    }, []);

    return (
        <Container id="projects" style={{ marginTop: '14%' }}>
            <Card className='card'>
                <Card.Header>
                    <h1 className="mb-3 text-center">Projects</h1>
                </Card.Header>
                <Card.Body>
                    <Carousel fade style={{ height: '400px', marginTop: '3%' }}>
                        {Project.map((item, idx) => {
                            return (
                                <Carousel.Item interval={1000} key={idx}>
                                    <Row>
                                        <Col md={6}>
                                            <Card.Img src={item.image} alt='project' className='projectImg mt-3' />
                                        </Col>
                                        <Col md={6}>
                                            <a href={item.url} className='text-decoration-none'>
                                                <h3 className='text-center'>{item.title}</h3>
                                            </a>
                                            <p className='h5 pt-2 fw-normal text-justify'>{item.description}</p>
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Projects;