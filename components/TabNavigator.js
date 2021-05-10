import * as React from 'react'
import {Image} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import AddRecipeScreen from '../Screens/AddRecipeScreen'
import StackNavigator from './StackNavigator'

const TabNavigator = createBottomTabNavigator({
    Home:{screen:StackNavigator},
    Publish : {screen:AddRecipeScreen}
}/* ,
{
  defaultNavigationOptions:({navigation})=>{
    tabBarIcon=()=>{
      const routeName = navigation.state.routeName;
        if (routeName === 'Home') {
          return (
            <Image
              source={require('../assets/home.png')}
              style={{ width: 30, height: 30 }}
            />
          );
        } else if (routeName === 'Publish') {
          return (
            <Image
              source={require('../assets/add.png')}
              style={{ width: 30, height: 30 }}
            />
          );
        }
    }
  }
} */)

export default TabNavigator