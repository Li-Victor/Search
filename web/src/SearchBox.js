import React from 'react';
import SearchInput from './SearchInput';
import ColorResult from './ColorResult';

import { ColorsContext } from './Colors';

const App = () => (
  <ColorsContext.Consumer>
    {({
      query, results, updateQuery, search
    }) => (
      <React.Fragment>
        <SearchInput query={query} updateQuery={updateQuery} search={search} />
        <ColorResult results={results} />
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

export default App;
