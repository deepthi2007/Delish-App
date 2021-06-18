import * as React from 'react'
import {Text , FlatList , View} from 'react-native'
import AppHeader from '../components/AppHeader'
import db from '../Config'
import firebase from 'firebase'

export default class MyRecipes extends React.Component{

constructor(){
    super()
    this.state={
        allRecipes:"",
        userId:firebase.auth().currentUser.email
    }
    this.requestref=null
}

getMyRecipes=async()=>{
    this.requestref = await db.collection("my_recipe").where("user_id","==",this.state.userId)
    .get().then((response)=>{
        response.forEach((doc)=>{
            this.setState({allRecipes:doc.data()})
        })
    })
}

componentDidMount=()=>{
    this.getMyRecipes()
}

componentWillUnmount=()=>{
    this.requestref
}

renderItem=({item,index})=>{
    console.log(item)
    return (
        <View>
      <List.Item
        key={index}
        title={"Name of The Recipe : "+ item.recipe_name}
         />
      <Divider style={{color:"green"}}/>
      </View>
    )
}

    render(){
        console.log(this.state.allRecipes)
        return(
            <View>
                <AppHeader header="My Recipes"/>
                <View>
                    {this.state.allRecipes.length===0
                    ?(<Text>You Did Not Save Any Recipes</Text>)
                    :(
                        <FlatList
                        data={this.state.allRecipes}
                        renderItem={this.renderItem}
                        keyExtractor={(item,index)=>{index.toString()}}
                        ></FlatList>
                    )}
                </View>
            </View>
        )
    }
}