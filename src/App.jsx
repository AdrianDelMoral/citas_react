import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [darkToggle, setDarkToggle] = useState(false)

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setPacientes(pacientesLS);
    }

    obtenerLS()
  }, [])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente=>paciente.id !== id)
    setPacientes(pacientesActualizados)
  }
  
  return (
    <div className={`container mx-auto mt-20 bg-gray-100 flex flex-col ${ darkToggle && 'dark' } py-5`}>
        
        <Header darkToggle={darkToggle} setDarkToggle={setDarkToggle}/>

      <div className="md:flex mt-12 dark:bg-gray-900 rounded-lg">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
          />
        
        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App 