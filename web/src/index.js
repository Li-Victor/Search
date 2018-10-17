import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import 'typeface-roboto';

import ColorListItem from './ColorListItem';
import WebSearchBox from './WebSearchBox';
import * as serviceWorker from './serviceWorker';
import { ColorsProvider, ColorsContext } from './Colors';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    suppressDeprecationWarnings: true
  }
});

const ColorSearchBox = WebSearchBox(ColorsContext, ColorListItem);

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <MuiThemeProvider theme={theme}>
      <ColorsProvider>
        <ColorSearchBox />
      </ColorsProvider>
    </MuiThemeProvider>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
