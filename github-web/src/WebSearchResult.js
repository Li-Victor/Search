import React from 'react';
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';

const WebSearchResult = ListItem => class extends React.PureComponent {
    static propTypes = {
      results: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number
        })
      ).isRequired
    };

    render() {
      const { results } = this.props;
      const listItems = results.map(result => (
        <ListItem key={`${result.id}`} result={result} />
      ));
      return <List>{listItems}</List>;
    }
};

export default WebSearchResult;
