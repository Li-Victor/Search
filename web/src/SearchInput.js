import React from 'react';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';

const ENTER_KEY = 13;

const SearchInput = ({ query, updateQuery, searchColors }) => (
  <Input
    placeholder="Search..."
    fullWidth
    value={query}
    onChange={event => {
      updateQuery(event.target.value);
    }}
    onKeyDown={event => {
      if (event.keyCode === ENTER_KEY) {
        event.preventDefault();
        searchColors();
      }
    }}
  />
);

SearchInput.propTypes = {
  query: PropTypes.string.isRequired,
  updateQuery: PropTypes.func.isRequired,
  searchColors: PropTypes.func.isRequired
};
export default SearchInput;
