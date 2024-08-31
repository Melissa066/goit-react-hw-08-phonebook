// src/components/UserMenu.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/authSlice';
import { Box, Button, Text } from '@chakra-ui/react';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.auth.user?.email);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Box bg="gray.200" p="4" display="flex" justifyContent="space-between" alignItems="center">
      <Text>{userEmail}</Text>
      <Button onClick={handleLogout} colorScheme="red">
        Logout
      </Button>
    </Box>
  );
};

export default UserMenu;
