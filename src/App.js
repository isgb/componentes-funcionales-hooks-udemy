import {useState} from 'react'

const App = () =>{

  const [value, setValue] = useState({normal: '', texto:''})
  const handleChange = (e) =>{
    //setValue({ [e.target.name] : e.target.value })
    setValue( (state) =>({ 
      // ...value,
      // [e.target.name] : e.target.value 
      ...state,
      [e.target.name] : e.target.value 
    }))
  }
  console.log(value)
  return(
     <div>
      {value.length < 5 ? <span>longitud minima de 5</span> : null}
      <input type="text" name="normal" value={value.normal} onChange={handleChange}/>
      <textarea type='text' name="texto" onChange={handleChange} value={value.texto}/>
     </div>
  )

}

export default App