import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View , Button} from 'react-native';

class DetailsScreen extends React.Component{
    goProfileHandler=() =>{
        this.props.navigation.navigate('Profile',{
            userName: 'Tecsupiano'
        })
    }
    render(){
      return(
        <View style={{ flex:1, alignItems:"center", justifyContent:"center"}}>
        <Text>Details Screen</Text>
        <Button
          title = "Go to Home"
          onPress={()=> this.props.navigation.navigate('Home')}
        />
        <Button
            title="Ver perfil"
            onPress={this.goProfileHandler}
        />
        </View>
      );
    }
  }
  
  export default DetailsScreen;