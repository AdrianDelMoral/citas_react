function Header({darkToggle,setDarkToggle}) {

  return (
		<div className="md:w-2/3 mx-5 md:mx-auto">
			<button className="mb-5 transition-colors text-gray-900 px-5 py-2 border rounded-md border-gray-900 hover:bg-gray-300 bg-gray-100 dark:bg-black dark:text-gray-100  dark:border-gray-100 dark:hover:bg-gray-700" onClick={() => setDarkToggle(!darkToggle)}>
				{darkToggle == true 
					? 'Cambiar a modo: ☀'
					: 'Cambiar a modo: 🌑' }
			</button>
			
			<h1 className="font-black text-5xl text-center">
				Seguimiento de Pacientes {''/* espacio en blanco */}
				<span className="text-indigo-600">Veterinaria</span>
			</h1>
		</div>
  )
}

export default Header;