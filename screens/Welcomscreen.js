import React,{Component} from 'react';
import { StyleSheet, Text, View, Image ,TouchableOpacity,TextInput,Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component {
  constructor(){
    super()
 this.state={
   Text:'',
 }
}
  userLogin = (Text) =>{
    firebase.auth().enterText(Text)
    .then(()=>{
      return Alert.alert("Sucessfully Entered")
    })



    .catch((error)=> {
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)  
    })
    
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    });
  }
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.profileContainer}></Text>
        </View>
    )
  }
    }

    
































