import React, { Component } from 'react';
import './Calculadora.css';
export default class Calculadora extends Component {
  state = {
    numero1: '',
    numero2: '',
    rpta: ''
  }
  onChangeNameHandler = (ev) => {
    this.setState({
      numero1: ev.target.value
    });
  }
  onChangeNameHandler2 = (ev) => {
    this.setState({
      numero2: ev.target.value
    });
  }
  sumar = () => {
    this.setState({ rpta: parseInt(this.state.numero1) + parseInt(this.state.numero2) });
  }
  restar = () => {
    this.setState({ rpta: parseInt(this.state.numero1) - parseInt(this.state.numero2) });
  }
  multiplicar = () => {
    this.setState({ rpta: parseInt(this.state.numero1) * parseInt(this.state.numero2) });
  }
  dividir = () => {
    this.setState({ rpta: parseInt(this.state.numero1) / parseInt(this.state.numero2) });
  }
  porcentaje = () => {
    // if ()
    this.setState({ rpta: parseInt(this.state.numero1) / 100 + ' ' + parseInt(this.state.numero2) / 100 });
  }
  render() {
    return (//<div className='CalculadoraClass3'>
      <div className='CalculadoraClass3'>
        <h1>Esta es mi Caculadora</h1>
        <p><input type="text" value={this.state.numero1} onChange={this.onChangeNameHandler} /></p>
        <p><input type="text" value={this.state.numero2} onChange={this.onChangeNameHandler2} /></p>
        <button class="button" onClick={this.sumar}>+</button>
        <button class="button" onClick={this.restar}>-</button>
        <button class="button" onClick={this.multiplicar}>*</button>
        <button class="button" onClick={this.dividir}>/</button>
        <button class="button" onClick={this.porcentaje}>%</button>
        <p>Resultado : {this.state.rpta}</p>

      </div>)
  }
}
