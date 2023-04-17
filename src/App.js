import { useState } from 'react'

const App = () => {

  const [value, setValue] = useState({ normal: 'por defecto', 
  texto: '' ,select : 'chanchofeliz', check: false})
  const handleChange = (/*e*/ {target}) => {
    //setValue({ [e.target.name] : e.target.value })
    setValue((state) => ({
      // ...value,
      // [e.target.name] : e.target.value 
      ...state,
      [target.name]: target.type === "checkbox" ? target.checked :target.value
    }))
  }
  console.log(value)
  return (
    <div>
      {value.length < 5 ? <span>longitud minima de 5</span> : null}
      <input type="text" name="normal" value={value.normal} onChange={handleChange} />
      <textarea type='text' name="texto" onChange={handleChange} value={value.texto} />


      <select value={value.select} name="select" onChange={handleChange}>
        <option value=''>-- Seleccione --</option>
        <option value='chanchofeliz'>Chanco Feliz</option>
        <option value='chanchitofeliz'> Chanchito Feliz</option>
        <option value='chanchitotriste'>Chanchito trsite</option>
        <option value='felipe'>Felipe</option>
      </select>

      <input
        type='checkbox'
        name='check'
        onChange={handleChange}
        checked={value.check}
      />
    </div>
  )

}

export default App