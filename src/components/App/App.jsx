import { useState, useEffect } from 'react';
import { Application } from './App.styled';
import { PageTitle } from 'components/PageTitle';
import { Footer } from 'components/Footer/Footer';
import { Section } from 'components/Section';
import { AddContactForm } from 'components/AddContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { initialContacts } from 'utilities';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', [
    ...initialContacts,
  ]);
  const [filter, setFilter] = useState('');

  const addContact = contact => {
    setContacts(state => [contact, ...state]);
  };

  const removeContact = id => {
    setContacts(state => state.filter(contact => contact.id !== id));
  };

  const setFilterNew = event => {
    const { value } = event.currentTarget;
    setFilter(value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return filter
      ? contacts.filter(contact =>
          contact.name
            .toLowerCase()
            .split(' ')
            .some(element => element.includes(normalizedFilter))
        )
      : contacts;
  };

  const isContactExist = name => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return false;
    }
    return true;
  };

  return (
    <Application>
      <PageTitle title="phonebook" />

      <Section title="Phonebook">
        <AddContactForm onSubmit={addContact} checkContact={isContactExist} />
      </Section>

      <Section title="Contacts">
        <Filter value={filter} onFilter={setFilterNew} />
        <ContactList
          contacts={getFilteredContacts()}
          removeItem={removeContact}
        />
      </Section>

      <Footer name="Roman Bezuhlyi" href="https://github.com/RomanBezuhlyi" />
    </Application>
  );
};
