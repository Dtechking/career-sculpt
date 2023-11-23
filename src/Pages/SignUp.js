import React, { useState } from 'react';
import { Container, Form, Button, Row } from 'react-bootstrap';
import axios from 'axios';
import './SignUp.css';
import { useAuth } from '../AuthContext';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('Student');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/User/signup', {
        name,
        email,
        age,
        phone,
        status,
        password,
      });
      

      // Assuming the server returns a message upon successful signup
      console.log(response.data.message);

      // Optionally, you can redirect to the login page or any other page after successful signup
      // navigate('/login');
    } catch (error) {
      console.log(error.response.data.error);
      // Handle signup error
    }

    // Reset the form fields
    setName('');
    setEmail('');
    setAge('');
    setPhone('');
    setStatus('Student');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <Container className="signup-container">
      <h2>Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Form.Group controlId="formName" className="form-rowrt">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formAge" className="form-rowlt">
            <Form.Label>Age:</Form.Label>
            <Form.Control
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group controlId="formEmail" className="form-rowcr">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              className="form-rowcr"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group controlId="formPhone" className="form-rowrt">
            <Form.Label>Phone:</Form.Label>
            <Form.Control
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formStatus" className="form-rowlt">
            <Form.Label>Status:</Form.Label>
            <Form.Control
              as="select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Graduate">Graduate</option>
              <option value="Student">Student</option>
              <option value="Working Professional">Working Professional</option>
            </Form.Control>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group controlId="formPassword" className="form-rowrt">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formConfirmPassword" className="form-rowlt">
            <Form.Label>Confirm Password:</Form.Label>
            <Form.Control
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Form.Group>
        </Row>
        <Button type="submit" variant="primary">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
};

export default SignUp;
