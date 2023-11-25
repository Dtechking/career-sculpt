import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Show.css';

const Contacts = () => {
  return (
    <section id="contact">
      <Container className="container" id="contain">
        <Row>
          <Col md={6} id="contactinfo">
            <h1>Contact Info</h1>
            <ul className="info">
              <li>
                <span>
                  <img src="Images/location.png" alt="" />
                </span>
                <span>
                  Nehru Street
                  <br />
                  Chrompet, Chennai
                  <br />
                  600044
                </span>
              </li>
              <li>
                <span>
                  <img src="Images/mail.png" alt="" />
                </span>
                <span>ct.mitindia.edu</span>
              </li>
              <li>
                <span>
                  <img src="Images/call.png" alt="" />
                </span>
                <span>07-22-66-89-17</span>
              </li>
            </ul>
            <ul className="social-media">
              <li>
                <a href="#">
                  <img src="Images/1.png" alt="" />
                </a>
              </li>
              {/* Add other social media links */}
            </ul>
          </Col>
          <Col md={6} className="contactform">
            <h2>Send A Message</h2>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="firstName">
                    <Form.Control type="text" placeholder="First Name" required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="lastName">
                    <Form.Control type="text" placeholder="Last Name" required />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="email">
                    <Form.Control type="email" placeholder="Email Address" required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="mobileNumber">
                    <Form.Control type="text" placeholder="Mobile Number" required />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="message" className="w100">
                <Form.Control as="textarea" rows={3} placeholder="Write your message here..." required />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contacts;
