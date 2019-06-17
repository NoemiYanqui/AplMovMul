import React from 'react';
import {View, Button, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

export default class ChatScreen extends React.Component {
    static navigationOptions = {
        title: 'Bienvenido a la App!',
        tabBarIcon:({focused,horizontal, tintColor})=>{
            return <Ionicons name="ios-clipboard" size={25} color={tintColor}/>
        }
    };
    _showMoreApp=()=>{
        this.props.navigation.navigate('chat');
    };
    _signOutAsync = async() =>{
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
    render(){
        <View>
            <Button title="Muestrame el chat" onPress={this._showMoreApp} />
            <Button title="Mejor, cierra sesiòn :)" onPress={this._signOutAsync} />
        </View>
    }
}