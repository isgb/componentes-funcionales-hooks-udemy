
import useFormulario from './hooks/useFormulario';

const App = () =>{
  const [formulario, setFormulario] = useFormulario({ name: '' })
  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name] : e.target.value
    })
  }
  return(
    <form>
      <input
        name="name"
        placeholder="Nombre"
        value={formulario.name}
        onChange={handleChange}
      />
    </form>
  )
 }

 export default App;