import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import contactImg from '../images/contact.png';
import { Formik, Field } from 'formik';
import axios from 'axios';

const Contact = () => {
    const [formStatus, setFormStatus] = useState('Send Mail');

    const domain = process.env.REACT_APP_MAILGUN_DOMAIN;
    const apiKey = process.env.REACT_APP_MAILGUN_API_KEY;

    const initialValues = { name: '', email: '', message: '' };

    const onSubmit = async (values, { resetForm, setSubmitting }) => {
        setFormStatus('Sending...');
        setSubmitting(true);

        const formData = new FormData();
        formData.append('to', 'shubhamsaini5878@gmail.com');
        formData.append('from', values.email);
        formData.append('subject', 'Contact Form Submission');
        formData.append('text', `Name: ${values.name}\nEmail: ${values.email}\nMessage: ${values.message}`);

        const authentication = {
            auth: {
                username: 'api',
                password: apiKey,
            },
        };

        try {
            const response = await axios.post(`https://api.mailgun.net/v3/${domain}/messages`, formData, authentication);

            if (response.status === 200) {
                setFormStatus('Email Sent!');
                setTimeout(() => {
                    setFormStatus('Send Mail');
                    resetForm();
                }, 3000);
            } else {
                setFormStatus('Failed to Send');
                setTimeout(() => {
                    setFormStatus('Send Again');
                }, 3000);
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setFormStatus('Failed to Send');
            setTimeout(() => {
                setFormStatus('Send Again');
            }, 3000);
        }
        setSubmitting(false);
    };

    return (
        <Container id="contact" style={{ marginTop: '14%', marginBottom: '10%' }}>
            <Card className="card">
                <Card.Header>
                    <h1 className="mb-3 text-center">Contact Form</h1>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col md={7}>
                            <Card.Img src={contactImg} alt="Contact-Me" className="contactImg" />
                        </Col>
                        <Col md={5} className="mt-2">
                            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                                {({ handleSubmit, isSubmitting }) => (
                                    <Form onSubmit={handleSubmit} autoComplete='off'>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Name</Form.Label>
                                            <Field type="text" name="name" className="form-control" required />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>Email</Form.Label>
                                            <Field type="email" name="email" className="form-control" required />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>Message</Form.Label>
                                            <Field as="textarea" name="message" className="form-control" style={{ height: '100px' }} required />
                                        </Form.Group>

                                        <div className="d-flex justify-content-center">
                                            <Button className="btn btn-danger mt-2" type="submit" disabled={isSubmitting}>
                                                {formStatus}
                                            </Button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Contact;