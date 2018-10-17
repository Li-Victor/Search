import React from 'react';

const SearchBox = (Context, SearchFrame, SearchInput, SearchResult) => () => (
  <Context.Consumer>
    {({
      query, results, updateQuery, search
    }) => (
      <SearchFrame>
        <SearchInput query={query} updateQuery={updateQuery} search={search} />
        <SearchResult results={results} />
      </SearchFrame>
    )}
  </Context.Consumer>
);

export default SearchBox;
