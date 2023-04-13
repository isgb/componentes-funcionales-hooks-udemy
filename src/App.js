import {Component, useState} from 'react';
import './App.css';

class App extends Component{
  state = { contador:0 }
  incrementar = () =>{
    this.setState({ contador: this.setState.contador + 1})
  }

  render(){
    return(
      <div>
          Contador : {this.state.contador}
          <button onClick={this.incrementar}>Incrementar</button>
      </div>
    )
  }
}

// function App() {
//   const [contador, setContador] = useState(0);
//   return (
//     <div>
//         Contador : {contador}
//         <button onClick={() => { setContador( contador + 1)}}>Incrementar</button>
//     </div>
//   );
// }

export default App;
