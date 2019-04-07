import React, {Component} from 'react';
import {View,Text, Button} from 'react-native';
class Contador extends Component{
    state={
      //  valores: 0
      valores:this.props.valores
    }

    componentDidUpdate(oldProps, oldState){
        if(oldProps.valores!==this.props.valores && !isNaN(this.props.valores)){
            this.setState({
                valores:this.props.valores
            });
        }

    }
    disminuirHandler=()=>{
        this.setState({
            valores: this.state.valores-1
        });
    }
    incrementarHandler=()=>{
        this.setState({
            valores: this.state.valores+1
        });
    }
    render(){
        return(
            <View>
                <Text>Mi Contador:{this.state.valores}</Text>
                <Text>Otro valor:{this.state.valores}</Text>
                <Button title='Disminuir' onPress={this.disminuirHandler}/>
                <Button title='Incrementar' onPress={this.incrementarHandler}
                        color= '#841584'/>
            </View>
        );
    }
}

export default Contador;
