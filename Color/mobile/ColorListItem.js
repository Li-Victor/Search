import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10
  },
  text: {
    flex: 1
  }
});

const ColorListItem = ({ result }) => (
  <View style={{ ...styles.row, backgroundColor: result.hex }}>
    <Text style={styles.text}>{result.name}</Text>
  </View>
);

ColorListItem.propTypes = {
  result: PropTypes.shape({
    name: PropTypes.string,
    hex: PropTypes.string,
    rgb: PropTypes.string
  }).isRequired
};
export default ColorListItem;
