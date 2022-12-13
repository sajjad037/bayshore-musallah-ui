import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Button } from '../common/button/Button';
import { Mosque } from '../../constants/labels';
import SimpleMap from '../google-map/visitUs';

import './Footer.css';



function Footer() {
    return (
        <div className='footer-container'>
            <Container>
                <Row>
                    <Col>
                        <div className='footer-subscription'>
                            <h2>Subscribe</h2>
                            <p className='footer-subscription-heading'>
                                Subscribe to get latest newsletter, prayer times and events updates.
                            </p>
                            <Form>
                                <Row>
                                    <Col sm={6}>
                                        <Form.Control className='footer-input' name='firstName' type="text" placeholder="First Name" />
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Control className='footer-input' name='lastName' type="text" placeholder="Last Name" />
                                    </Col>
                                </Row>
                                <Row>

                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Control className='footer-input' name='email' type="email" placeholder="Enter Email" />
                                    </Col>


                                </Row>
                                <Row>
                                    <Col><Button buttonStyle='btn--outline'>Subscribe</Button></Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>

                    <Col>
                        <div className='footer-link-items'>
                            <h2>About Us</h2>
                            <Link to='/sign-up'>How it works</Link>
                            <Link to='/'>Testimonials</Link>
                            <Link to='/'>Careers</Link>
                            <Link to='/'>Investors</Link>
                            <Link to='/'>Terms of Service</Link>
                        </div>
                    </Col>

                    <Col>
                        <div className='footer-visit-us'>
                            <h2>Visit Us</h2>
                            <p className='footer-visit-us-address'>
                                Address: <a href="https://www.google.com/maps/dir/45.4261286,-75.5009193/Bayshore+spiritual+and+social+center,+Bayshore+Musalla,+3049+Carling+Ave,+Ottawa,+ON+K2B+7K3,+Canada/" target="_blank">3049 Carling Ave, Ottawa, ON K2B 7K3, Canada</a>
                            </p>
                            <div style={{ height: '250px', width: '100%' }}>
                                <SimpleMap />
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <div className="social-media-wrap">
                        <Col>
                            <small className='website-rights'>{Mosque.title} © 2022</small>
                        </Col>

                        <Col md="auto">
                            <div className='social-icons'>
                                <Link
                                    className='social-icon-link facebook'
                                    to='/'
                                    target='_blank'
                                    aria-label='Facebook'
                                >
                                    <i className='fab fa-facebook-f' />
                                </Link>
                                <Link
                                    className='social-icon-link youtube'
                                    to='/'
                                    target='_blank'
                                    aria-label='Youtube'
                                >
                                    <i className='fab fa-youtube' />
                                </Link>
                                <Link
                                    className='social-icon-link twitter'
                                    to='/'
                                    target='_blank'
                                    aria-label='Twitter'
                                >
                                    <i className='fab fa-twitter' />
                                </Link>
                                <Link
                                    className='social-icon-link twitter'
                                    to='/'
                                    target='_blank'
                                    aria-label='WhatsApp'
                                >
                                    <i className='fab fa-whatsapp' />
                                </Link>
                            </div>
                        </Col>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;