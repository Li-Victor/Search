import React from 'react';
import List from '@material-ui/core/List';

const WebSearchResult = ListItem =>
  class extends React.PureComponent {
    render() {
      // no prop types
      const { results } = this.props;
      // DON"T USE INDEX FOR KEYS. THIS IS AN EXAMPLE
      const listItems = results.map((result, index) => (
        <ListItem key={index} result={result} />
      ));
      return <List>{listItems}</List>;
    }
  };

export default WebSearchResult;
