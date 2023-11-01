import { useState, useEffect } from "react"
import Error from "./Error";

function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {
  // Añadir un desplegable del tipo de animal que es
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false)

	useEffect(() => {
		// Object.keys(nombreArray) 
		// sirve para comprobar si un array está vacío o no, 
		// ya que dice la suma de todas sus keys es 0, 
		// hasta que se añada algo
		if(Object.keys(paciente).length > 0){
			console.log(paciente);
			setNombre(paciente.nombre);
			setPropietario(paciente.propietario);
			setEmail(paciente.email);
			setFecha(paciente.fecha);
			setSintomas(paciente.sintomas);
		}
	}, [paciente])
	

	const generarId = () => {
		const fecha = Math.random().toString(36).substring(2)
		const random = Date.now().toString(36)

		return random + fecha;
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		// Validación del Formulario
		if ([nombre, propietario, email, fecha, sintomas].includes('')) {
			console.log('Hay campos vacios');
			setError(true);
			return;
		}

		setError(false)

		// Objeto de Paciente
		const objetoPaciente = {
			nombre,
			propietario,
			email,
			fecha,
			sintomas,
		}
		
		if (paciente.id) {
			
			/**
			 * Editando el Registro
			 * 
			 * @pacienteState -> hará referencia a lo que está en el state, que en este caso es una variable temporal
			 * 
			 * @pacienteState -> Objeto aún no actualizado que está en el State
			 * @objetoPaciente -> Objeto Nuevo Actualizado
			 * 
			*/ 
			objetoPaciente.id = paciente.id;
			const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

			setPacientes(pacientesActualizados)
			setPaciente({})

		} else {
			// Nuevo Registro			
			objetoPaciente.id = generarId();
			setPacientes([...pacientes, objetoPaciente])
		}
		
		// Reiniciar el Formulario
		setNombre('');
		setPropietario('');
		setEmail('');
		setFecha('');
		setSintomas('');

	}

	return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 dark:bg-gray-900 dark:text-gray-100 rounded-md py-5 lg:p-5">
			<h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>
			<p className="text-xl mt-5 mb-10 text-center">
				Añade pacientes y {''/* Espacio en blanco */}
				<span className="text-indigo-600 font-bold">Administralos</span>
			</p>

      <form 
				onSubmit={handleSubmit}
				className="bg-gray-300 dark:bg-gray-800 dark:text-gray-100 shadow-md rounded-lg py-10 px-5 mb-10">
					{ error && <Error><p>Todos los campos son obligatorios</p></Error> }
        <div className="mb-5">
          <label 
            htmlFor="mascota"
            className="block text-gray-700 dark:text-gray-100 uppercase font-bold">
              Nombre de la Mascota
          </label>
          <input 
            id="mascota"
            type="text" 
            placeholder="Nombre de la Mascota" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md dark:text-gray-900"
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
						/>
        </div>
          
        <div className="mb-5">
					<label 
						htmlFor="propietario"
						className="block text-gray-700 dark:text-gray-100  uppercase font-bold">
							Nombre del Propietario
          </label>
          <input 
						id="propietario"
						type="text" 
						placeholder="Nombre del Propietario"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md dark:text-gray-900"
						value={propietario}
						onChange={(e) => setPropietario(e.target.value)}
						/>
				</div>
        
        <div className="mb-5">
          <label 
						htmlFor="email"
						className="block text-gray-700 dark:text-gray-100 uppercase font-bold">
							Email
					</label>
					<input 
						id="email"
						type="email" 
						placeholder="Email de Contacto del Propietario" 
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md dark:text-gray-900"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						/>
				</div>
          
        <div className="mb-5">
					<label 
						htmlFor="alta"
						className="block text-gray-700 dark:text-gray-100 uppercase font-bold">
							Alta
					</label>
					<input 
            id="alta"
            type="date" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md dark:text-gray-900"
						value={fecha}
						onChange={(e) => setFecha(e.target.value)}
						/>
        </div>
            
        <div className="mb-5">
          <label 
            htmlFor="sintomas"
            className="block text-gray-700 dark:text-gray-100 uppercase font-bold">
							Sintomas
          </label>
          <textarea 
            id="sintomas" 
            name="sintomas" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md dark:text-gray-900"
            placeholder="Describe los Sintomas"
						value={sintomas}
						onChange={(e) => setSintomas(e.target.value)}
						/>
        </div>

        <input
					type="submit" 
					className="bg-indigo-600 w-full p-3 text-white rounded-md font-bold uppercase hover:bg-indigo-700 cursor-pointer transition-colors"
					value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}/>
			</form>
    </div>
  )
}

export default Formulario