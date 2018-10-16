import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';

class ColorResult extends React.PureComponent {
  render() {
    const { results } = this.props;
    const listItems = results.map(color => (
      <ListItem
        key={`color-${color.hex}`}
        style={{ backgroundColor: color.hex }}
        divider
      >
        <ListItemText primary={`${color.name}`} />
      </ListItem>
    ));
    return <List>{listItems}</List>;
  }
}

export default ColorResult;
ColorResult.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      hex: PropTypes.string,
      rgb: PropTypes.string
    })
  ).isRequired
};
