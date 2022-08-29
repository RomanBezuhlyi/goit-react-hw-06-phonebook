import PropTypes from 'prop-types';
import { Input } from 'components/Input';
import { FilterContainer } from './Filter.styled';

export function Filter({ value, onFilter }) {
  return (
    <FilterContainer>
      <Input
        name="filter"
        type="search"
        value={value}
        title="Enter a name or a family name of the contact to filter data. Filter is case insensitive."
        onChange={onFilter}
        required={false}
        pattern=""
      />
    </FilterContainer>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
