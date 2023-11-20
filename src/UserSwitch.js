import { Box, Button, Center, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

const UserSwitch = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <Box
      border="1px solid #ddd" // Border styling
      padding="20px" // Padding
      marginY="20px" // Distance from the bottom
    >
      <Center>
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Initial state
          animate={{ opacity: 1, y: 0 }} // Animation state
          transition={{ duration: 0.5 }} // Animation duration
        >
          <div className="form-container">
            {showLogin ? <Login /> : <SignUp />}
          </div>
        </motion.div>
      </Center>
      <Flex direction="column" align="center">
        <Button mt={4} onClick={toggleForm} colorScheme="orange" bg="orange.500">
          {showLogin ? 'Switch to Signup' : 'Switch to Login'}
        </Button>
      </Flex>
    </Box>
  );
};

export default UserSwitch;
