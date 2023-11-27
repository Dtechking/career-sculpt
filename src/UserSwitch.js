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
      className="border UserSwitch"
      fluid
      style={{
        height: '93vh',
        overflowY: 'hidden',
        overflowX: 'hidden',
      }}
    >
      <Container>
        <Row className={`slide-in-${showLogin ? 'login' : 'signup'}`} style={{ flexWrap: 'nowrap' }}>
          <Col xs={12} md={6}>
            <Login />
          </Col>
          <Col xs={12} md={6} style={{ marginLeft: '80px', marginRight: '175px' }}>
            <Row className='align-items-center justify-content-center'>
            <img
            width='100%'
            height='420px'
              src={signInImage}
              alt="Description"
              className="login-image"
            />
              <Button
              onClick={toggleForm}
              variant="primary"
              className="w-50 mt-5"
            >
              {showLogin ? 'Switch to Signup' : 'Switch to Login'}
            </Button>
            </Row>

          </Col>
          <Col xs={12} md={6} >
            <SignUp />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default UserSwitch;
