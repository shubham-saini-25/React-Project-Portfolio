import React, { useEffect, useState } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { MyProjects } from '../constants/ProjectData';
import { Carousel } from 'react-responsive-carousel';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(MyProjects);
    }, []);

    return (
        <Container id="projects" style={{ marginTop: '14%' }}>
            <Card className="card">
                <Card.Header>
                    <h1 className="mb-3 text-center">Projects</h1>
                </Card.Header>
                <Card.Body>
                    <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} useKeyboardArrows={true}>
                        {projects.map(({ image, url, title, description }, idx) => (
                            <Row style={{ textAlign: 'justify' }} key={idx}>
                                <Col md={6}>
                                    <Card.Img src={image} alt="project" className="projectImg mt-4" />
                                </Col>
                                <Col md={6} className='mt-3'>
                                    <a href={url} className="text-decoration-none">
                                        <h2 className="text-center">{title}</h2>
                                    </a>
                                    <Card.Text className="h4 pt-2 fw-normal">{description}</Card.Text>
                                </Col>
                            </Row>
                        ))}
                    </Carousel>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Projects;