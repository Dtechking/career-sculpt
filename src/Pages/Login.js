import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useAuth } from '../AuthContext';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/User/login', {
        email,
        password,
      });
      
      // Assuming the server returns a token upon successful login
      const { token } = response.data;

      // Store the token in local storage (you may want to use a more secure method)
      localStorage.setItem('token', token);
      login();

      // Redirect to the home page or any other page you want after successful login
      navigate('/');
    } catch (error) {
      if (error.response) {
        // Request was made and server responded with a status code outside the range of 2xx
        setError(error.response.data.error);
      } else if (error.request) {
        // Request was made but no response was received
        setError('No response received from the server');
      } else {
        // Something else happened in making the request
        setError('An error occurred');
      }
    }
  };

  return (
    <Container className="login-container">
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
