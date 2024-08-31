// src/pages/Homepage.js
import React from 'react';
import { Box, Button, Heading, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <Box maxW="md" mx="auto" mt="8" p="6" textAlign="center">
      <Heading mb="6">Welcome to the Contact Book</Heading>
      <Stack spacing="4">
        <Button as={Link} to="/login" variant="solid" colorScheme="blue" width="full">
          Login
        </Button>
        <Button as={Link} to="/register" variant="solid" colorScheme="red" width="full">
          Register
        </Button>
      </Stack>
    </Box>
  );
};

export default Homepage;
