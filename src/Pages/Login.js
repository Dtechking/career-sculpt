import React, { useState } from 'react';
import { ChakraProvider, CSSReset, Box, Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Implement authentication logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <ChakraProvider>
      <CSSReset />
      <Box className="login-container" p={4} mt={8} width="300px" margin="auto">
        <Heading mb={4}>Login</Heading>
        <form onSubmit={handleLogin}>
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
            <FormLabel>Password:</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormControl>
          <Button type="submit" colorScheme="blue">Login</Button>
        </form>
      </Box>
    </ChakraProvider>
  );
};

export default Login;
