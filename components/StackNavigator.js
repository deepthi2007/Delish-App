import * as React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from '../Screens/HomeScreen'
import ViewRecipeScreen from '../Screens/ViewRecipeScreen'

const StackNavigator = createStackNavigator({
    Home : {screen:HomeScreen},
    ViewRecipe:{screen:ViewRecipeScreen}
},{
    initialRouteName:'Home'
})

export default StackNavigator