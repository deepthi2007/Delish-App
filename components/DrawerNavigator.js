import * as React from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer'
import TabNavigator from './TabNavigator'
import CustomSideBar from './customSideBar'
import MyRecipes from '../Screens/MyRecipes'

 const DrawerNavigator = createDrawerNavigator({
    Home:{screen : TabNavigator},
    MyRecipes : {screen : MyRecipes}
}, {
    contentComponent:CustomSideBar
}, {
    initialRouteName:'Home'
})

export default DrawerNavigator