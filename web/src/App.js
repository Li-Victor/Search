import React from 'react';
import SearchInput from './SearchInput';
import ColorList from './ColorResult';

import { ColorsContext } from './Colors';

const App = () => (
  <ColorsContext.Consumer>
    {({
      query, colors, updateQuery, searchColors
    }) => (
      <React.Fragment>
        <SearchInput
          query={query}
          updateQuery={updateQuery}
          searchColors={searchColors}
        />
        <ColorList colors={colors} />
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

export default App;
