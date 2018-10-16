import React from 'react';
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';

class SearchResult extends React.PureComponent {
  render() {
    const { results, ListItem } = this.props;
    const listItems = results.map(result => (
      <ListItem key={`result-${result.id}`} result={result} />
    ));
    return <List>{listItems}</List>;
  }
}

SearchResult.propTypes = {
  ListItem: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number
    })
  ).isRequired
};

export default SearchResult;
