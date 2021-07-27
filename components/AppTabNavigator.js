import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs' ;
import {Image} from 'react-native';
import Zoogle from '../screens/Request';
import Zoogle from '../screens/Welcomscreen';
import WelcomeScreen from '../screens/Welcomscreen';


export const AppTabNavigator = createButtonTabNavigator({
  Request:{
      screens:Request,
      navigationOptions : {
          tabBarIcon: <Image source={require("../assets/Zoogle.png")} style={{width:20,height:20}}/>,
         tabBarIconLabe1:"Zoogle",
      }
  },
  Welcome:{
      screens:WelcomeScreen,
      navigationOptions : {
        tabBarIcon: <Image source={require("../assets/Zoogle.png")} style={{width:20,height:20}}/>,
       tabBarIconLabe1:"Zoogle",
    }
  }
});