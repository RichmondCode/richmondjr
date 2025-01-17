import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am
            {' '}
            <span className="purple">Beteise Richmond</span>
            from
            {' '}
            <span className="purple"> Kampala, Uganda.</span>
            <br />
            &ldquo;I am Computer Engineer by profession&ldquo;
            <br />
            I graduated with a Bachelor of Science in Computer Engineering from Busitema University
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />
              {' '}
              Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight />
              {' '}
              Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight />
              {' '}
              Playing Football
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            &ldquo;Strive to build things that make a difference!&rdquo;
            {' '}
          </p>

          <footer className="blockquote-footer">richjr</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
