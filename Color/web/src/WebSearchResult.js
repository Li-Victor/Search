import React from 'react';
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';

const WebSearchResult = ListItem => class extends React.PureComponent {
    static propTypes = {
      results: PropTypes.shape({
        name: PropTypes.string,
        hex: PropTypes.string,
        rgb: PropTypes.string
      }).isRequired
    };

    render() {
      // no prop types
      const { results } = this.props;
      // DON"T USE INDEX FOR KEYS. THIS IS AN EXAMPLE
      const listItems = results.map(result => (
        <ListItem key={result.hex} result={result} />
      ));
      return <List>{listItems}</List>;
    }
};

export default WebSearchResult;
