import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import signInImage from './Images/Sign_in.jpg';
import './UserSwitch.css'

const UserSwitch = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <Container
      className="border p-4 mt-4 UserSwitch"
      fluid
      style={{
        height: '87vh',
        overflowY: 'auto',
        overflowX: 'hidden',
        marginBottom: '70px',
      }}
    >
      <Container>
        <Row className={`slide-in-${showLogin ? 'login' : 'signup'}`} style={{ flexWrap: 'nowrap' }}>
          <Col xs={12} md={6} className="mr-8">
            <Login />
          </Col>
          <Col xs={12} md={6} style={{ marginLeft: '125px', marginRight: '125px' }}>
            <img
              src={signInImage}
              alt="Description"
              className="login-image"
            />
          </Col>
          <Col xs={12} md={6} >
            <SignUp />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="mt-3">
          <Col xs={12} className="text-center">
            <Button
              onClick={toggleForm}
              variant="primary"
              className="w-50"
            >
              {showLogin ? 'Switch to Signup' : 'Switch to Login'}
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default UserSwitch;
