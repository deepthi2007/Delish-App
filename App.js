import React from 'react';
import { Image } from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation' 
import LoginScreen from './Screens/LoginScreen'
import TabNavigator from './components/TabNavigator'
import ViewRecipeScreen from './Screens/ViewRecipeScreen';

export default function App() {
  return (
      <AppContainer/>
  );
}

const SwitchNavigator = createSwitchNavigator({
  Login:{screen:LoginScreen},
  TabNavigator:{screen:TabNavigator}
})

const AppContainer = createAppContainer(SwitchNavigator)