import React, { useState } from 'react';
import {
  ChakraProvider,
  CSSReset,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
} from '@chakra-ui/react';

const SignUp = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('Student');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (event) => {
    event.preventDefault();
    // Implement user registration logic here
    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Phone:', phone);
    console.log('Email:', email);
    console.log('Status:', status);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <ChakraProvider>
      <CSSReset />
      <Box className="signup-container" p={4} mt={8} width="300px" margin="auto">
        <Heading mb={4}>Sign Up</Heading>
        <form onSubmit={handleSignUp}>
          <FormControl mb={4}>
            <FormLabel>Name:</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Age:</FormLabel>
            <Input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Phone:</FormLabel>
            <Input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Email:</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Status:</FormLabel>
            <Select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Graduate">Graduate</option>
              <option value="Student">Student</option>
              <option value="Working Professional">Working Professional</option>
            </Select>
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Password:</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Confirm Password:</FormLabel>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </FormControl>
          <Button type="submit" colorScheme="blue">Sign Up</Button>
        </form>
      </Box>
    </ChakraProvider>
  );
};

export default SignUp;
