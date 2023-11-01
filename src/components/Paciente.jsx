function Paciente({paciente, setPaciente, eliminarPaciente}) {

	const { nombre, propietario, email, fecha, sintomas, id } = paciente;

	const handleEliminar = () => {
		const respuesta = confirm('Deseas eliminar este paciente?')
		
		if(respuesta){
			eliminarPaciente(id)
		}
	}
	
	return (
		<div className="mx-5 my-10 bg-gray-300 dark:bg-gray-800 shadow-md px-5 py-10 rounded-xl text-gray-700 dark:text-gray-300">
			<p className="font-bold mb-3  uppercase">Nombre: {''/* Espacio en blanco */}
				<span className="font-normal normal-case">{nombre}</span>
			</p>
			<p className="font-bold mb-3  uppercase">Propietario: {''/* Espacio en blanco */}
				<span className="font-normal normal-case">{propietario}</span>
			</p>
			<p className="font-bold mb-3  uppercase">Email: {''/* Espacio en blanco */}
				<span className="font-normal normal-case">{email}</span>
			</p>
			<p className="font-bold mb-3  uppercase">Fecha de Alta: {''/* Espacio en blanco */}
				<span className="font-normal normal-case">{fecha}</span>
			</p>
			<p className="font-bold mb-10  uppercase">Síntomas: {''/* Espacio en blanco */}
				<span className="font-normal normal-case">{sintomas}</span>
			</p>

			<div className="flex justify-evenly lg:justify-between">
				<button 
					type="button"
					className="py-2 px-4 lg:px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg transition-all"
					onClick={()=> setPaciente(paciente)}
					>
					Editar
				</button>

				<button 
					type="button"
					className="py-2 px-4 lg:px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg transition-all"
					onClick={handleEliminar}
				>
					Eliminar
				</button>
			</div>
		</div>
	)
}

export default Paciente