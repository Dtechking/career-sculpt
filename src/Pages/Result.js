// Result.js

import React from 'react';
import { Heading, Text, Center } from '@chakra-ui/react';

const Result = ({ scores }) => {
  return (
    <Center>
      <div>
        <Heading as="h1" size="xl" mb="4">
          Quiz Result
        </Heading>
        <Text fontSize="lg" mb="4">
          Your scores:
        </Text>
        <pre>{JSON.stringify(scores, null, 2)}</pre>
        {/* You can customize the result display based on your requirements */}
      </div>
    </Center>
  );
};

export default Result;
