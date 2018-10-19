import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import SearchBox from '@color/shared/SearchBox';
import MobileSearchInput from './MobileSearchInput';
import MobileSearchResult from './MobileSearchResult';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
    marginTop: 25
  }
});

const MobileSearchFrame = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

MobileSearchFrame.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

const MobileSearchBox = (Context, ListItem) => SearchBox(
  Context,
  MobileSearchFrame,
  MobileSearchInput,
  MobileSearchResult(ListItem)
);

export default MobileSearchBox;
