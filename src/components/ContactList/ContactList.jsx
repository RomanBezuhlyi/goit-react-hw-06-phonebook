import { useSelector } from 'react-redux';
import { getContactsValue, getFilterValue } from '../../redux/contacts/slice';
import { ContactListItem } from 'components/ContactListItem';
import { List } from './ContactList.styled';

export function ContactList() {
  const items = useSelector(getContactsValue);
  const filterValue = useSelector(getFilterValue);

  const getFilteredContacts = () => {
    const normalizedFilter = filterValue.toLocaleLowerCase();
    return filterValue
      ? items.filter(item =>
          item.name
            .toLowerCase()
            .split(' ')
            .some(element => element.includes(normalizedFilter))
        )
      : items;
  };

  return (
    <List>
      {getFilteredContacts().map(({ id }) => {
        return <ContactListItem key={id} id={id}></ContactListItem>;
      })}
    </List>
  );
}
