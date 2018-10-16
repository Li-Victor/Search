/** @format */

import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

import App from './src/App';
import { ColorsProvider } from './src/Colors';

const Root = () => (
  <ColorsProvider>
    <App />
  </ColorsProvider>
);

AppRegistry.registerComponent(appName, () => Root);
