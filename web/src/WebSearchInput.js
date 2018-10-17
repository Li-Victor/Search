import React from 'react';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';

const ENTER_KEY = 13;

const WebSearchInput = ({ query, updateQuery, search }) => (
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
        search();
      }
    }}
  />
);

WebSearchInput.propTypes = {
  query: PropTypes.string.isRequired,
  updateQuery: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired
};
export default WebSearchInput;
