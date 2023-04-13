import { useEffect, useState} from 'react';
import './App.css';

const useContador = (inicial) =>{
  const [contador, setContador] = useState(0);
  const incrementar = () =>{
    setContador( contador + 1)
  }

  return [contador,incrementar]
}

const Interval = (contador) => {
  useEffect(()=>{
   const i = setInterval(() => console.log(contador), 1000)
    // Desuscribir
    return () => clearInterval(i)
  }, [contador])
  return(
    <p>Interval</p>
  )
}

const App = () => {
  
  const [ contador, incrementar ] = useContador(0)

  useEffect(() =>{
    document.title = contador;
  }, [contador])

  return (
    <div>
        Contador : {contador}
        <button onClick={incrementar}>Incrementar</button>
        <Interval contador={contador}/>
    </div>
  );
}

export default App;
