import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import ColorList from './ColorList';
import { ColorsContext } from './Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
    marginTop: 25
  },
  textInput: {
    height: 40,
    paddingLeft: 8,
    borderColor: 'gray',
    borderWidth: 1
  }
});

const App = () => (
  <ColorsContext.Consumer>
    {({
      query, colors, updateQuery, searchColors
    }) => (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          returnKeyType="search"
          value={query}
          onChangeText={text => updateQuery(text)}
          onSubmitEditing={() => searchColors()}
        />
        <ColorList colors={colors} />
      </View>
    )}
  </ColorsContext.Consumer>
);

export default App;
