/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import Calculadora from './src/components/Calculadora';
export default class App extends Component {
/*  state={
    valorInicial:'0'
  }
  iniciarContadoresHandler = (texto) =>{
    this.setState({
      valorInicial:texto
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Nuestro primer Componente</Text>
        <TextInput value={this.state.valorInicial}
                    onChangeText={this.iniciarContadoresHandler}/>
        {!isNaN(this.state.valorInicial)?(
          <View>
                <Contador valores={parseInt(this.state.valorInicial)}/>
                <Contador valores= {parseInt(this.state.valorInicial)+1}/>
                <Contador valores={parseInt(this.state.valorInicial)+2}/>
            </View>):(<Text>Debe ingresar un número!</Text>)}
      </View>
    );
  }
  */
  //parte de la calculadora
  state={
    n1:'0',
    n2:'0',
    rpta:'0'
  }
  inputHandler1 =(txt) => {
    this.setState({
      n1:txt
    });
  }
  inputHandler2 =(txt) => {
    this.setState({
      n2:txt
    });
  }
  inputRptaHandler =(txt) => {
    this.setState({
      rpta:txt
    });
  }
  render(){
    return(
    <View style={styles.container}>
    <Text style={styles.welcome}>Mi Calculadora</Text>
    <TextInput value={this.state.n1}
                onChangeText={this.inputHandler1}/>
     <TextInput value={this.state.n2}
                onChangeText={this.inputHandler2}/>
    {!isNaN(this.state.n1)?(
      <View>
            <Calculadora n1={parseInt(this.state.n1)} n2={parseInt(this.state.n2)}/>
        </View>):(<Text>Debe ingresar un número!</Text>)}
      
  </View>)
  }
}
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
