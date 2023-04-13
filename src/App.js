import { useEffect, useState} from 'react';
import './App.css';

const useContador = (inicial) =>{
  const [contador, setContador] = useState(0);
  const incrementar = () =>{
    setContador( contador + 1)
  }

  return [contador,incrementar]
}

function App() {
  
  const [contador, incrementar] = useContador(0)

  useEffect(() =>{
    document.title = contador;
  }, [contador])

  return (
    <div>
        Contador : {contador}
        <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default App;
