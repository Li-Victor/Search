import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    paddingLeft: 8,
    borderColor: 'gray',
    borderWidth: 1
  }
});

const MobileSearchInput = ({ query, updateQuery, search }) => (
  <TextInput
    style={styles.textInput}
    returnKeyType="search"
    value={query}
    onChangeText={text => updateQuery(text)}
    onSubmitEditing={() => search()}
  />
);

MobileSearchInput.propTypes = {
  query: PropTypes.string.isRequired,
  updateQuery: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired
};
export default MobileSearchInput;
