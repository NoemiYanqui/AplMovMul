import React, { Component } from 'react';
import Contador from './components/Contador/Contador';
import Calculadora from './components/Calculadora/Calculadora';

class App extends Component {
  render() {
    return (
      <div>
        <Contador valor={0} />
        <Calculadora />

      </div>
/* <div>
      <Contador valor={6} />
      <hr/>
      <Contador valor={0} />
    </div>*/
    );

    
  }
}

export default App;

   