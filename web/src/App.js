import React from 'react';
import Input from '@material-ui/core/Input';
import ColorList from './ColorList';

import { ColorsContext } from './Colors';

const ENTER_KEY = 13;

const App = () => (
  <ColorsContext.Consumer>
    {({
      query, colors, updateQuery, searchColors
    }) => (
      <React.Fragment>
        <Input
          placeholder="Search..."
          fullWidth
          value={query}
          onChange={event => {
            updateQuery(event.target.value);
          }}
          onKeyDown={event => {
            if (event.keyCode === ENTER_KEY) {
              event.preventDefault();
              searchColors();
            }
          }}
        />
        <ColorList colors={colors} />
      </React.Fragment>
    )}
  </ColorsContext.Consumer>
);

export default App;
