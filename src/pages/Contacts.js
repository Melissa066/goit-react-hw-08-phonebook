// src/pages/Contacts.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../components/ContactForm/ContacForm';
import ContactList from '../components/ContactListItem/ContactListItem';
import Filter from '../components/Filter/Filter';
import { fetchAll, deleteContact } from '../redux/contacts/operations';
import { selectFilteredContacts, selectIsLoading } from '../redux/contacts/selectors';
import { Box, Heading, Spinner } from '@chakra-ui/react';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <Box p="4">
      <Heading as="h1" mb="4">Contacts</Heading>
      <ContactForm />
      <Filter />
      {isLoading ? (
        <Spinner size="xl" />
      ) : (
        <ContactList contacts={contacts} onDeleteContact={handleDeleteContact} />
      )}
    </Box>
  );
};

export default Contacts;
