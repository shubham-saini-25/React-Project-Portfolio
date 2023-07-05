import React from 'react';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaPhp, FaLaravel } from 'react-icons/fa';
import { FaFacebookSquare, FaInstagramSquare, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import MongoDB from '../images/mongodb.png';
import jQuery from '../images/jQuery.png';
import HiIcon from '../images/hi.png';
import MyImg from '../shubham.png';
import JS from '../images/js.png';

const HomePage = () => {
    return (
        <Container id="home" style={{ marginTop: '7%' }}>
            <Row>
                <Col md={8} className='leftContainer mt-5 pt-2'>
                    <div className='d-flex align-items-center'>
                        <span className="title">Full Stack MERN Developer</span>
                        <img src={HiIcon} className="hello-icon" alt="hello icon" />
                    </div>

                    <div className="description">
                        <p>
                            Hi, I'm Shubham Saini. A passionate Full Stack Developer based in Noida, India.
                        </p>
                        <div className='social-links'>
                            <h2 className='mt-2 fw-bold'>Social Links:</h2>
                            <a href='/' className='facebook'><FaFacebookSquare /></a>
                            <a href='/' className='instagram'><FaInstagramSquare /></a>
                            <a href='/' className='linkedin'><FaLinkedin /></a>
                            <a href='/' className='github'><FaGithub /></a>
                        </div>
                    </div>

                    <div className='tech-stack'>
                        <h1 className='fw-bold'>Tech Stack:</h1>

                        <div className='tech-icons'>
                            <div className='circle'>
                                <FaHtml5 className='icon display-1' style={{ color: 'orangered' }} />
                                <div className='tech-icons-title'>HTML5</div>
                            </div>

                            <div className='circle'>
                                <FaCss3Alt className='icon display-1' style={{ color: '#0066B2' }} />
                                <div className='tech-icons-title'>CSS3</div>
                            </div>

                            <div className='circle'>
                                <img className='icon' src={JS} alt='JS' />
                                <div className='tech-icons-title'>JavaScript</div>
                            </div>

                            <div className='circle'>
                                <FaBootstrap className='icon display-1' style={{ color: 'purple' }} />
                                <div className='tech-icons-title'>Bootstrap</div>
                            </div>

                            <div className='circle'>
                                <FaReact className='icon display-1 text-info' />
                                <div className='tech-icons-title'>ReactJS</div>
                            </div>

                            <div className='circle'>
                                <FaNodeJs className='icon display-1 text-success' />
                                <div className='tech-icons-title'>NodeJS</div>
                            </div>

                            <div className='circle'>
                                <img className='icon' src={MongoDB} alt='MongoDbIcon' style={{ width: '80%' }} />
                                <div className='tech-icons-title'>MongoDB</div>
                            </div>

                            <div className='circle'>
                                <img className='icon' src={jQuery} alt='jQueryIcon' style={{ width: '90%' }} />
                                <div className='tech-icons-title'>jQuery</div>
                            </div>

                            <div className='circle'>
                                <FaPhp className='icon display-1 text-primary' style={{ width: '80%' }} />
                                <div className='tech-icons-title'>PHP</div>
                            </div>

                            <div className='circle'>
                                <FaLaravel className='icon display-1 text-danger' />
                                <div className='tech-icons-title'>Laravel</div>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col md={4} className='rightContainer mt-5'>
                    <div className='frame'>
                        <img src={MyImg} alt="Shubham Saini" />
                    </div>
                    <h1 className='frameName fw-bold text-center'>Shubham Saini</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;