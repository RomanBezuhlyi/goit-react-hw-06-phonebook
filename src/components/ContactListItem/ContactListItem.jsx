import PropTypes from 'prop-types';
import { ListItem } from './ContactListItem.styled';
import { Button } from 'utilities';

export function ContactListItem({ id, name, number, onDelete }) {
  return (
    <ListItem>
      {name}: {number}{' '}
      <Button type="button" onClick={() => onDelete(id)}>
        Delete
      </Button>
    </ListItem>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
