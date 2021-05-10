import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { List,Divider } from 'react-native-paper'
import db from '../config'
import AppHeader from '../components/AppHeader'

export default class HomeScreen extends Component{
  constructor(){
    super()
    this.state = {
      allRecipes : []
    }
 this.recipeRef= null
  }

  getAllRecipes =()=>{
    this.recipeRef = db.collection("recipes_list")
    .onSnapshot((snapshot)=>{
      var allRecipes = []
      snapshot.forEach((doc) => {
          allRecipes.push(doc.data())
      })
      console.log(allRecipes)
      this.setState({allRecipes:allRecipes})
    })
  }

  keyExtractor = (item, index) => {
      index.toString();
     }

  renderItem = ( {item, i} ) =>{

    return (
        <View>
      <List.Item
        key={i}
        title={"Name of The Recipe : "+item.name}
        right={props => <List.Icon {...props} icon="equal"/>}
        onPress={()=>{this.props.navigation.navigate('ViewRecipe',{recipeDetails:item})}}
         />
      <Divider style={{color:"green"}}/>
      </View>
    )
  }

  componentDidMount(){
    this.getAllRecipes()
  }

  componentWillUnmount(){
    this.recipeRef();
  }

  render(){
    return(
      <View style={{flex:1}}>
          <AppHeader header="Home"/>
          <Text style={styles.buttonText}>You can View All The Recipes Here</Text>
        <View style={{flex:1}}>
          {
            this.state.allRecipes.length === 0
            ?(
              <View style={{flex:1, fontSize: 20, justifyContent:'center', alignItems:'center'}}>
                <Text style={{ fontSize: 20}}>List of all Recipes</Text>
              </View>
            )
            :(
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.allRecipes}
                renderItem={this.renderItem}
              />
            )
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     }
  },
  buttonText:{
    color:'green',
    fontWeight:'200',
    fontSize:40,
    textAlign:"center"
  }
})