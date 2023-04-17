import { useRef } from 'react';

const App = () => {

 const submit = (e) =>{
  e.preventDefault()
  const data = Array.from(new FormData(e.target))
  console.log(Object.fromEntries(data))
 }

  return(
    <div>
      <div>
        <span>lala</span>
        <input type="text" name='campo'/>
      </div>
      <input name='campo-2'/>
      <input type="file" name='archivo'/>
      <input type='submit' value='Enviar'/>
      
    </div>
  )
}

export default App;