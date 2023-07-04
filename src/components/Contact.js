import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import contactImg from '../images/contact.png';

const Contact = () => {
    const [formStatus, setFormStatus] = useState('Send Mail');

    const onSubmit = (e) => {
        e.preventDefault()

        setFormStatus('Submitting...');
        const { name, email, message } = e.target.elements;

        let formData = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(formData);
    }

    return (
        <Container id="contact" style={{ marginTop: '14%', marginBottom: '10%' }}>
            <Card className='card'>
                <Card.Header>
                    <h1 className="mb-3 text-center">Contact Form</h1>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col md={7}>
                            <Card.Img src={contactImg} alt='Contact-Me' className='contactImg' />
                        </Col>
                        <Col md={5} className='mt-2'>
                            <Form onSubmit={onSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control className="form-control" type="text" id="name" required />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control className="form-control" type="email" id="email" required />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Message</Form.Label>
                                    <textarea className="form-control" id="message" style={{ height: '100px' }} required />
                                </Form.Group>

                                <div className='d-flex justify-content-center'>
                                    <Button className="btn btn-danger mt-2" type="submit">{formStatus}</Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Contact;