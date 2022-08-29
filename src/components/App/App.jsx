import { Application } from './App.styled';
import { PageTitle } from 'components/PageTitle';
import { Footer } from 'components/Footer/Footer';
import { Section } from 'components/Section';
import { AddContactForm } from 'components/AddContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
export const App = () => {
  return (
    <Application>
      <PageTitle title="phonebook" />

      <Section title="Phonebook">
        <AddContactForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
      <Footer name="Roman Bezuhlyi" href="https://github.com/RomanBezuhlyi" />
    </Application>
  );
};
