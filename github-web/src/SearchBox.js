import React from 'react';
import SearchInput from './SearchInput';
import SearchResult from './SearchResult';

import { GithubContext } from './Github';

const SearchBox = ListItem => () => (
  <GithubContext.Consumer>
    {({
      query, results, updateQuery, search
    }) => (
      <React.Fragment>
        <SearchInput query={query} updateQuery={updateQuery} search={search} />
        <SearchResult ListItem={ListItem} results={results} />
      </React.Fragment>
    )}
  </GithubContext.Consumer>
);

export default SearchBox;
