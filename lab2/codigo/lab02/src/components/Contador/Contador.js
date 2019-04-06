import React, {Component} from 'react';
import  './Contador.css';
export default class Contador extends Component{
  state ={
    cont: this.props.valor,
  }
  disminuirHandler=()=>{
    this.setState({
      cont:this.state.cont-1
    });
  }
  aumentarHandler=()=>{
    this.setState({
      cont:this.state.cont+1
    });
  }
  resetearHandler=()=>{
    this.setState({
      cont:this.props.valor
    });
  }
  
  render(){
    let advertencia=(<p>Iniciamos con un numero mayor a 5!</p>);
    if(this.props.valor<=5)advertencia=null;
    return(<div className='Contador2'>
      <h1>Este es mi componente de contador</h1>
      <p>Este contador iniciará en : {this.props.valor}</p>
      {advertencia}
      <p>Número Actual: {this.state.cont}</p>
      <button onClick={this.disminuirHandler}>Disminuir</button>
      <button onClick={this.resetearHandler}>Resetear</button>
      <button onClick={this.aumentarHandler}>Aumentar</button>
      </div>)
  }
}
