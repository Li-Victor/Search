import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#8E8E8E'
  }
});

const MobileSearchResult = ListItem => class extends React.PureComponent {
    static propTypes = {
      results: PropTypes.arrayOf(
        PropTypes.shape({
          color: PropTypes.string,
          hex: PropTypes.string,
          rgb: PropTypes.string
        })
      ).isRequired
    };

    render() {
      const { results } = this.props;
      return (
        <FlatList
          data={results.map(color => ({
            key: color.hex,
            ...color
          }))}
          renderItem={({ item }) => <ListItem result={item} />}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      );
    }
};

export default MobileSearchResult;
