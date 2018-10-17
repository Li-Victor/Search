import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';

const ColorListItem = ({ result }) => (
  <ListItem style={{ backgroundColor: result.hex }} divider>
    <ListItemText primary={`${result.name}`} />
  </ListItem>
);

ColorListItem.propTypes = {
  result: PropTypes.shape({
    color: PropTypes.string,
    hex: PropTypes.string,
    rgb: PropTypes.string
  }).isRequired
};
export default ColorListItem;
