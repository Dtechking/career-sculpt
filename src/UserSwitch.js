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
      className="border p-4 mt-1 UserSwitch"
      fluid
      style={{
        height: '98vh',
        overflowY: 'auto',
        overflowX: 'hidden',
        marginBottom: '70px',
      }}
    >
      <Container fluid>
        <Row className={`slide-in-${showLogin ? 'login' : 'signup'}`} style={{ flexWrap: 'nowrap' }}>
          <Col xs={12} md={6} className="mr-6">
            <Login />
          </Col>
          <Col xs={12} md={6} style={{ marginLeft: '80px', marginRight: '125px' }}>
            <img
            width='80%'
            height='420px'
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
      <Container fluid>
        <Row>
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
