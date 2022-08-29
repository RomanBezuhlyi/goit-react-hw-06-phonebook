import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem';
import { List } from './ContactList.styled';

export function ContactList({ contacts, removeItem }) {
  return (
    <List>
      {contacts
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(({ id, name, number }) => {
          return (
            <ContactListItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDelete={removeItem}
            ></ContactListItem>
          );
        })}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  removeItem: PropTypes.func.isRequired,
};
