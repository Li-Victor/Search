import React from 'react';
import SearchInput from './SearchInput';
import SearchResult from './SearchResult';

import { ColorsContext } from './Colors';

const SearchBox = ListItem => () => (
  <ColorsContext.Consumer>
    {({ query, results, updateQuery, search }) => (
      <React.Fragment>
        <SearchInput query={query} updateQuery={updateQuery} search={search} />
        <SearchResult ListItem={ListItem} results={results} />
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

export default SearchBox;
