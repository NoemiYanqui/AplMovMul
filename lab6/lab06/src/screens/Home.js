import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View , Button} from 'react-native';


class HomeScreen extends React.Component {
  render(){
    return(
      <View style={{ flex:1, alignItems:"center", justifyContent:"center"}}>
      <Text>Hola mundo!</Text>
      <Button title="Go to Details" 
            onPress={() =>this.props.navigation.navigate('Details')} 
      />
      </View>
    );
  }
}
export default HomeScreen;