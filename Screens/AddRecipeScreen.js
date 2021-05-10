import * as React from 'react'
import {View, 
    Text , 
    TextInput ,
    TouchableOpacity ,
    StyleSheet} from 'react-native'
import firebase from 'firebase'
import db from '../Config'
import AppHeader from '../components/AppHeader'

export default class AddRecipeScreen extends React.Component{
constructor(){
    super()
    this.state={
        name:"",
        ingredients:"",
        procedure:"",
        userId:firebase.auth().currentUser.email,
        Id:0
    }
}

createRecipeId=()=>{
    this.setState({Id:this.state.Id+1})
}

addRecipe=async()=>{
 this.createRecipeId()
 console.log(this.state.recipeId)
await db.collection("recipes_list").add({
 "user_id":this.state.userId ,
 "name": this.state.name,
 "ingredients":this.state.ingredients,
 "procedure":this.state.procedure,
 "recipe_id":"rec"+this.state.Id
})
alert('Your Recipe is Published') 
}

    render(){
        return(
            <View>
                <AppHeader header="Publish The Recipe"/>
                <TextInput
                style={styles.input}
                placeholder="Name of the Recipe"
                placeholderTextColor="blue"
                onChangeText={(text)=>{this.setState({name:text})}}>
                </TextInput>

                <TextInput
                style={styles.input2}
                placeholder="Ingredients for the Recipe"
                placeholderTextColor="blue"
                multiline="true"
                onChangeText={(text)=>{this.setState({ingredients:text})}}>
                </TextInput>

                <TextInput
                style={styles.input2}
                placeholder="Procedure"
                placeholderTextColor="blue"
                multiline="true"
                onChangeText={(text)=>{this.setState({procedure:text})}}>
                </TextInput>

                <TouchableOpacity 
                style={styles.button}
                onPress={()=>{this.addRecipe()}}>
                    <Text style={styles.buttonText}>Publish The Recipe</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input:{
        width:"80%",
        height:55,
        alignSelf:'center',
        borderColor:'#63ff97',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10
    },
    input2:{
        width:"80%",
        height:85,
        alignSelf:'center',
        borderColor:'#63ff97',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10
    },
    button:{
        width:300,
   height:50,
   justifyContent:'center',
   alignSelf:'center',
   borderRadius:25,
   backgroundColor:"#7cf502",
   shadowColor: "#000",
   shadowOffset: {
      width: 0,
      height: 8,
   },
   shadowOpacity: 0.30,
   shadowRadius: 10.32,
   elevation: 16,
   padding: 10,
   marginTop:20
    },
    buttonText:{
        color:'#ffff',
        fontWeight:'200',
        fontSize:20,
        textAlign:"center"
      }
})