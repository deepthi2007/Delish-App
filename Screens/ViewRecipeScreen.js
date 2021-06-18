import * as React from 'react'
import {Text , View , StyleSheet , TouchableOpacity} from 'react-native'
import AppHeader from '../components/AppHeader'
import {Card} from 'react-native-elements'
import firebase from 'firebase'
import db from '../Config'

export default class ViewRecipeScreen extends React.Component{

    constructor(props){
        super(props)
        this.state={
            userId:firebase.auth().currentUser.email,
            recipeName:this.props.navigation.getParam('recipeDetails')["name"],
            ingredients:this.props.navigation.getParam('recipeDetails')["ingredients"],
            procedure:this.props.navigation.getParam('recipeDetails')["procedure"],
            email:this.props.navigation.getParam('recipeDetails')["user_id"],
            name:"",
            contact:"",
        }
        this.requestref=null
    }

    getdetails=async()=>{
    this.requestref = await db.collection("users").where("email_id","==",this.state.email).get()
        .then((response)=>{
            response.forEach((doc)=>{
                var ref = doc.data()
                this.setState({name:ref.first_name+" "+ref.last_name,
                              contact:ref.contact})
            })
        })
    }

    addMyRecipe=async()=>{
        await db.collection("my_recipe").add({
            "recipe_name":this.state.recipeName,
            "ingredients":this.state.ingredients,
            "procedure":this.state.procedure,
            "user_id":this.state.userId,
        })
        alert("You Saved This recipe")
    }

    componentDidMount=()=>{
        this.getdetails()
    }

    componentWillUnmount=()=>{
        this.requestref
    }

    render(){
        return(
            <View>
                <AppHeader header="View Recipe"/>
                <View>
                    <Card>
                        <Card.Title>Recipe</Card.Title>
                        <Card.Divider/>
                        <Card>
                            <Text>Name Of The Recipe : {this.state.recipeName}</Text>
                        </Card>
                        <Card>
                            <Text>Ingredients Needed : {this.state.ingredients}</Text>
                        </Card>
                        <Card>
                            <Text>Procedure : {this.state.procedure}</Text>
                        </Card>
                    </Card>
                </View>
                <View>
                    <Card>
                        <Card.Title></Card.Title>
                        <Card.Divider/>
                        <Card>
                            <Text>Name : {this.state.name}</Text>
                        </Card>
                        <Card>
                            <Text>Contact : {this.state.contact}</Text>
                        </Card>
                    </Card>
                </View>
                <TouchableOpacity 
                onPress={()=>{this.addMyRecipe()}}
                style={styles.button}>
                    <Text style={styles.buttonText}> Save </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text1:{
        fontSize:30,
        textAlign:"center",
        color:"green"
    },
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
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
        alignSelf:"center"
      },
      buttonText:{
        color:'#ffff',
        fontWeight:'200',
        fontSize:20
      }
})
