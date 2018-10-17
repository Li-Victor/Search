/** @format */

import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

import { ColorsProvider, ColorsContext } from './src/Colors';
import ColorListItem from './src/ColorListItem';
import MobileSearchBox from './src/MobileSearchBox';

const ColorSearchBox = MobileSearchBox(ColorsContext, ColorListItem);

const Root = () => (
  <ColorsProvider>
    <ColorSearchBox />
  </ColorsProvider>
);

AppRegistry.registerComponent(appName, () => Root);
