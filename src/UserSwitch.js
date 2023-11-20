import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

const UserSwitch = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <Container className="border p-4 mt-4">
      <Row>
        <Col xs={12}>
          <motion.div
            initial={{ opacity: 0, x: showLogin ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: showLogin ? 50 : -50 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <div className="form-container">
              {showLogin ? <Login /> : <SignUp />}
            </div>
          </motion.div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={12} className="text-center">
          <Button onClick={toggleForm} variant="outline-primary" className="w-50">
            {showLogin ? 'Switch to Signup' : 'Switch to Login'}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default UserSwitch;
