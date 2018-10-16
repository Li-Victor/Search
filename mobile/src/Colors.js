import React from 'react';
import crayola from './crayola.json';

export const ColorsContext = React.createContext();

export class ColorsProvider extends React.Component {
  state = {
    query: '',
    colors: crayola
  };

  render() {
    const { query, colors } = this.state;
    return (
      <ColorsContext.Provider
        value={{
          query,
          colors,
          updateQuery: newValue => {
            this.setState(() => ({
              query: newValue
            }));
          },
          searchColors: () => {
            this.setState(prevState => ({
              colors: crayola.filter(color => color.name.toLowerCase().includes(prevState.query.toLowerCase()))
            }));
          }
        }}
      >
        {this.props.children}
      </ColorsContext.Provider>
    );
  }
}
