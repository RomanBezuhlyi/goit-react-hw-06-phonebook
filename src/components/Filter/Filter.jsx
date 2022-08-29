import { useSelector, useDispatch } from 'react-redux';
import { setFilter, getFilterValue } from '../../redux/contacts/slice';
import { Input } from 'components/Input';
import { FilterContainer } from './Filter.styled';

export function Filter() {
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const handleChange = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };
  return (
    <FilterContainer>
      <Input
        name="filter"
        type="search"
        value={filterValue}
        title="Enter a name or a family name of the contact to filter data. Filter is case insensitive."
        onChange={handleChange}
        required={false}
        pattern=""
      />
    </FilterContainer>
  );
}
