import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Rich</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>
            Copyright ©
            {' '}
            {year}
            {' '}
            Beteise Richmond
          </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/RichmondCode"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/beteiserichmond"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter profile"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/beteise-richmond-619664213/"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/beteiserichmond"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
