import * as React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from '../Screens/HomeScreen'
import MyRecipes from '../Screens/MyRecipes'
import ViewRecipeScreen from '../Screens/ViewRecipeScreen'

const StackNavigator = createStackNavigator({
    Home : {screen:HomeScreen,navigationOptions: {headerShown:false}},
    ViewRecipe:{screen:ViewRecipeScreen,navigationOptions: {headerShown:false}},
    Myrecipes : {screen:MyRecipes}
},{
    initialRouteName:'Home',navigationOptions:{headerShown:false}
})

export default StackNavigator