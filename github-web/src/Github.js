import React from 'react';
import PropTypes from 'prop-types';

export const GithubContext = React.createContext();

export class GithubProvider extends React.Component {
  state = {
    query: '',
    results: []
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
      <GithubContext.Provider
        value={{
          query,
          results,
          updateQuery: newValue => {
            this.setState(() => ({
              query: newValue
            }));
          },
          search: (callback = () => {}) => {
            fetch(`https://api.github.com/search/repositories?q=${query}`)
              .then(response => response.json())
              .then(response => {
                // check if response is an array
                const { items } = response;
                if (items && items.constructor === Array) {
                  this.setState(
                    () => ({
                      results: items
                    }),
                    () => {
                      callback();
                    }
                  );
                } else {
                  console.log('Something went wrong with the request');
                }
              });
          }
        }}
      >
        {children}
      </GithubContext.Provider>
    );
  }
}
