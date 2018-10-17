import React from 'react';
import PropTypes from 'prop-types';
import crayola from './crayola.json';

export const ColorsContext = React.createContext();

export class ColorsProvider extends React.Component {
  state = {
    query: '',
    results: crayola
  };

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  };

  render() {
    const { query, results } = this.state;
    const { children } = this.props;
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
          search: (done = () => {}) => {
            this.setState(
              prevState => ({
                results: crayola.filter(color => color.name
                  .toLowerCase()
                  .includes(prevState.query.toLowerCase()))
              }),
              done()
            );
          }
        }}
      >
        {children}
      </ColorsContext.Provider>
    );
  }
}
