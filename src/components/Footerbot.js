import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              We provide the latest news updates from around the world, bringing you insightful articles on various topics.
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white">Home</a></li>
              <li><a href="#about" className="text-white">About</a></li>
              <li><a href="#contact" className="text-white">Contact</a></li>
              <li><a href="#privacy" className="text-white">Privacy Policy</a></li>
            </ul>
          </Col>
          <Col md={4}>
  <h5>Follow Us</h5>
  <ul className="list-unstyled d-flex">
    <li className="me-3"><a href="#facebook" className="text-white"><FontAwesomeIcon icon={faFacebook} /></a></li>
    <li className="me-3"><a href="#twitter" className="text-white"><FontAwesomeIcon icon={faTwitter} /></a></li>
    <li className="me-3"><a href="#instagram" className="text-white"><FontAwesomeIcon icon={faInstagram} /></a></li>
    <li><a href="#linkedin" className="text-white"><FontAwesomeIcon icon={faLinkedin} /></a></li>
  </ul>
</Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0">&copy; 2024 NewsWebsite. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
