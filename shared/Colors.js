import React from 'react';
import crayola from './crayola.json';

export const ColorsContext = React.createContext();

export class ColorsProvider extends React.Component {
  state = {
    query: '',
    results: crayola
  };

  render() {
    const { query, results } = this.state;
    return (
      <ColorsContext.Provider
        value={{
          query,
          results,
          updateQuery: newValue => {
            this.setState(() => ({
              query: newValue
            }));
          },
          search: () => {
            this.setState(prevState => ({
              results: crayola.filter(color =>
                color.name.toLowerCase().includes(prevState.query.toLowerCase())
              )
            }));
          }
        }}
      >
        {this.props.children}
      </ColorsContext.Provider>
    );
  }
}
