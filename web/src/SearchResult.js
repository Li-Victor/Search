import React from 'react';
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';

class SearchResult extends React.PureComponent {
  render() {
    const { results, ListItem } = this.props;
    const listItems = results.map(result => (
      <ListItem key={`color-${result.hex}`} result={result} />
    ));
    return <List>{listItems}</List>;
  }
}

SearchResult.propTypes = {
  ListItem: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      hex: PropTypes.string,
      rgb: PropTypes.string
    })
  ).isRequired
};

export default SearchResult;
