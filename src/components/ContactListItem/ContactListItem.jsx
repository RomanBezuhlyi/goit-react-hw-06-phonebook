import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact, getContactsValue } from '../../redux/contacts/slice';
import { ListItem } from './ContactListItem.styled';
import { Button } from 'utilities';

export function ContactListItem({ id }) {
  const items = useSelector(getContactsValue);
  const dispatch = useDispatch();
  const { name, number } = items.find(item => item.id === id);
  const handleClick = () => {
    dispatch(removeContact(id));
  };
  return (
    <ListItem>
      {name}: {number}{' '}
      <Button type="button" onClick={handleClick}>
        Delete
      </Button>
    </ListItem>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
};
