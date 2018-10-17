import React from 'react';
import {
  Text, FlatList, StyleSheet, View
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10
  },
  text: {
    flex: 1
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#8E8E8E'
  }
});

class ColorList extends React.PureComponent {
  render() {
    const { colors } = this.props;
    return (
      <FlatList
        data={colors.map(color => ({
          key: color.hex,
          ...color
        }))}
        renderItem={({ item }) => (
          <View style={{ ...styles.row, backgroundColor: item.hex }}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    );
  }
}

export default ColorList;
ColorList.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      hex: PropTypes.string,
      rgb: PropTypes.string
    })
  ).isRequired
};
