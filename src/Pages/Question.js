import React from 'react';
import { Box, Button, Center } from '@chakra-ui/react';

const Question = ({ qno, question, options, handleAnswer }) => {
  return (
    <Center>
      <Box
        textAlign="center"
        borderRadius="lg"
        w="60%"
        p="20"
        marginTop="50px"
        border="2px"
        boxShadow="lg"
      >
        <div style={{ border: '2px solid black', paddingTop : '30px', borderRadius: '15px'}}>
        <div width="80%">
          <h3>{question}</h3>
        </div>
        
        <Box p="20px" >
          {options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleAnswer(option, question, qno)}
              marginY="2"
              width="40%"
              colorScheme="orange"
              variant="solid"
              p="10px"
              marginLeft="50px"
              marginRight="50px"
              marginTop="10px"
              marginBottom="10px"
              borderRadius='10px'
            >
              {option}
            </Button>
          ))}
        </Box>
        </div>
      </Box>
    </Center>
  );
};

export default Question;
