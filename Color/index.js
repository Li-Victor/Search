/** @format */

import React from 'react';
import { AppRegistry } from 'react-native';
import { ColorsProvider, ColorsContext } from '@color/shared/Colors';
import { name as appName } from './app.json';

import ColorListItem from './mobile/ColorListItem';
import MobileSearchBox from './mobile/MobileSearchBox';

const ColorSearchBox = MobileSearchBox(ColorsContext, ColorListItem);

const Root = () => (
  <ColorsProvider>
    <ColorSearchBox />
  </ColorsProvider>
);

AppRegistry.registerComponent(appName, () => Root);
