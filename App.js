import React from 'react';
import {createSwitchNavigator,createAppContainer} from 'react-navigation' 
import LoginScreen from './Screens/LoginScreen'
import TabNavigator from './components/TabNavigator'
import DrawerNavigator from "./components/DrawerNavigator";

export default function App() {
  return (
      <AppContainer/>
  );
}

const SwitchNavigator = createSwitchNavigator({
  Login:{screen:LoginScreen},
  DrawerNavigator:{screen: DrawerNavigator},
  TabNavigator:{screen:TabNavigator}
})

const AppContainer = createAppContainer(SwitchNavigator)