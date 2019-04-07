import React, {Component} from 'react';
import {View,Text, Button} from 'react-native';
class Calculadora extends Component{
    state={
      //  valores: 0
      n1:this.props.n1,
      n2:this.props.n2,
      rpta:this.props.rpta
    }
    componentDidUpdate(oldProps, oldState){
        if((oldProps.n1!==this.props.n1 && !isNaN(this.props.n1)) ||
        (oldProps.n2!==this.props.n2 && !isNaN(this.props.n2))||
        (oldProps.rpta!==this.props.n1 && !isNaN(this.props.rpta))){
            this.setState({
                n1:this.props.n1,
                n2:this.props.n2,
                rpta:this.props.rpta
            });
        }
    }
    SumarHandler=()=>{
        this.setState({
            rpta: this.state.n1 + this.state.n2
        });
    }
    RestarHandler=()=>{
        this.setState({
            rpta: this.state.n1 - this.state.n2
        });
    }
    ProductoHandler=()=>{
        this.setState({
            rpta: this.state.n1 * this.state.n2
        });
    }
    DivisionHandler=()=>{
        this.setState({
            rpta:this.state.n1 / this.state.n2
        });
    }
    render(){
        return(
            <View> 
                <Button title='+' onPress={this.SumarHandler}/>
                <Button title='-' onPress={this.RestarHandler}
                 color= '#841584'/>
                <Button title='x' onPress={this.ProductoHandler}/>
                <Button title='/' onPress={this.DivisionHandler}
                        color= '#841584'/> 
                <Text>La Respuesta es:{this.state.rpta}</Text>       
            </View>
        );
    }
}

export default Calculadora;
