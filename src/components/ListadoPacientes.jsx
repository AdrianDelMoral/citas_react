import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

	return (
		<div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll dark:bg-gray-900 dark:text-gray-100 mx-5 py-5 lg:p-5">
			{pacientes && pacientes.length ? (
				<>
					<h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
					<p className="text-xl mt-5 text-center">
						Administra tus {''/* Espacio en blanco */}
						<span className="text-indigo-600 font-bold">Pacientes y Citas</span>
					</p>
					{ pacientes.map( paciente => (
						<Paciente 
						key={paciente.id}
						paciente={paciente}
						setPaciente={setPaciente}
						eliminarPaciente={eliminarPaciente}
						/>
						))}
				</>
				) : (
				<>
					<h2 className="font-black text-3xl text-center">No hay pacientes</h2>
					<p className="text-xl mt-5 mb-10 text-center">
						Comienza agregando un paciente {''/* Espacio en blanco */}
						<span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
					</p>
				</>
				)}
			
		</div>
	)
}

export default ListadoPacientes