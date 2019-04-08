/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View , Button} from 'react-native';
import {createStackNavigator, createBottomTabNavigator,createAppContainer, createDrawerNavigator} from 'react-navigation';

import HomeScreen from './src/screens/Home';
import DetailsScreen from './src/screens/Details';
import ProfileScreen from './src/screens/Profile';


//const AppNavigator = createStackNavigator  --> menu superior
//const AppNavigator = createDrawerNavigator --> para menu lateral

const AppNavigator = createBottomTabNavigator({
  Home:{
    screen: HomeScreen,
      path: 'home/',
       navigationOptions:{
     title: 'Esta es la HOME'
    }
  },
  Details: DetailsScreen,
  Profile:ProfileScreen,
},
  {
    initialRouteName:"Home",
    defaultNavigationOptions:{
        title:'Un título genérico Noemi',
        headerStyle:{
          backgroundColor:'#f4511e',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
          fontWeight:'bold',
        },
    },
  
});
export default createAppContainer(AppNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
