import {Component, useState} from 'react';
import './App.css';

// class App extends Component{
//   state = { contador:0 }
//   incrementar = () =>{
//     this.setState({ contador: this.setState.contador + 1})
//   }

//   render(){
//     return(
//       <div>
//           Contador : {this.state.contador}
//           <button onClick={this.incrementar}>Incrementar</button>
//       </div>
//     )
//   }
// }

const useContador = (inicial) =>{
  const [contador, setContador] = useState(0);
  const incrementar = () =>{
    setContador( contador + 1)
  }

  return [contador,incrementar]
}

function App() {
  
  const [contador, incrementar] = useContador(0)

  return (
    <div>
        Contador : {contador}
        <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default App;
