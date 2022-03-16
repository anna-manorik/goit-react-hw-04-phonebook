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

  const deleteContact = contactId => setContacts(contacts.filter(contact => contact.id !== contactId));

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

// class OldApp extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   handleSubmitForm = state => {
//     const checkname = this.state.contacts.find(contact =>
//       contact.name.toLowerCase().includes(state.name.toLowerCase())
//     );

//     if (!checkname) {
//       const contact = {
//         id: shortid.generate(),
//         name: state.name,
//         number: state.number,
//       };
//       this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
//     } else {
//       alert(state.name + ' is already in contact list');
//     }
//   };

//   getVisibleContacts = () => {
//     const { contacts, filter } = this.state;
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   deleteContact = contactId => {
//     this.setState(({ contacts }) => ({
//       contacts: contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   componentDidMount() {
//     if (localStorage.getItem('contacts')) {
//       const currentContactList = JSON.parse(localStorage.getItem('contacts'));
//       this.setState({ contacts: currentContactList });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     const { filter } = this.state;

//     const visibleContacts = this.getVisibleContacts();

//     return (
//       <>
//         <h1>Phonebook</h1>
//         <Form onSubmit={this.handleSubmitForm} />

//         <h2>Contacts</h2>
//         <Filter changeFilter={this.changeFilter} filter={filter} />
//         <NameList
//           visibleContacts={visibleContacts}
//           onDeleteContact={this.deleteContact}
//         />
//       </>
//     );
//   }
// }

// export default App;
