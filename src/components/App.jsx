import React, { useState, useEffect } from 'react';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import NameList from './NameList/NameList';
import shortid from 'shortid';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const handleSubmitForm = (name, number) => {
    const checkname = contacts.find(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );

    if (!checkname) {
      const contact = {
        id: shortid.generate(),
        name: name,
        number: number,
      };
      setContacts([contact, ...contacts]);
    } else {
      alert(name + ' is already in contact list');
    }
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = getVisibleContacts();

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = contactId =>
    setContacts(contacts.filter(contact => contact.id !== contactId));

  useEffect(() => {
    if (localStorage.getItem('contacts')) {
      const currentContactList = JSON.parse(localStorage.getItem('contacts'));
      setContacts(currentContactList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <Form onSubmit={handleSubmitForm} />

      <h2>Contacts</h2>
      <Filter changeFilter={changeFilter} filter={filter} />
      <NameList
        visibleContacts={visibleContacts}
        onDeleteContact={deleteContact}
      />
    </>
  );
}
