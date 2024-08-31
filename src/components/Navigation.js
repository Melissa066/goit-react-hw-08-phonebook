// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Box as="nav" p="4" bg="white" boxShadow="sm">
      <Button as={Link} to="/" variant="solid" colorScheme="blue">Home</Button>
      <Button as={Link} to="/login" variant="solid" colorScheme="blue" ml="4">Login</Button>
      <Button as={Link} to="/register" variant="solid" colorScheme="red" ml="4">Register</Button>
      {isAuthenticated && (
        <Button as={Link} to="/contacts" variant="solid" colorScheme="blue" ml="4">Contacts</Button>
      )}
    </Box>
  );
};

export default Navigation;
