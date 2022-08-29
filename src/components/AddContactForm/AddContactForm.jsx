import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Input } from '../Input/Input';
import { FormContainer } from './AddContactForm.styled';
import { Button } from 'utilities';

export const AddContactForm = ({ onSubmit, checkContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.log('No such a field');
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (checkContact(name)) {
      onSubmit({ id: nanoid(), name, number });
      reset();
    }
  };

  return (
    <FormContainer autoComplete="off" onSubmit={handleSubmit}>
      <Input
        name="name"
        type="text"
        id={nanoid()}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        required={true}
        onChange={handleChange}
      />
      <Input
        type="tel"
        name="number"
        id={nanoid()}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        required={true}
        onChange={handleChange}
      />
      <Button type="submit">Add contact</Button>
    </FormContainer>
  );
};

AddContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  checkContact: PropTypes.func.isRequired,
};
