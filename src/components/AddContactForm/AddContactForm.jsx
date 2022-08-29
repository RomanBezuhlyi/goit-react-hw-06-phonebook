import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContactsValue } from '../../redux/contacts/slice';
import { nanoid } from 'nanoid';
import { Input } from '../Input/Input';
import { FormContainer } from './AddContactForm.styled';
import { Button } from 'utilities';

export const AddContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const items = useSelector(getContactsValue);
  const dispatch = useDispatch();

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
    if (isContactExist(name)) {
      dispatch(addContact({ id: nanoid(), name, number }));
      reset();
    }
  };

  const isContactExist = name => {
    if (items.find(item => item.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`);
      return false;
    }
    return true;
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
