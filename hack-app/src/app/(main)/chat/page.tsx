import React from 'react'

const page = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PLATAFORMA DE PLANEACIÓN EDUCATIVA</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Ayuda a tu Planeación de Clases</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Ingresa la información necesaria para que te ayudemos a crear planes de clase personalizados.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 py-6">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="materia">Materia</label>
            <input
              type="text"
              id="materia"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Ej. Matemáticas"
            />
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 py-6">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="tipo-ensenanza">Tipo de Enseñanza</label>
            <select
              id="tipo-ensenanza"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Selecciona una opción</option>
              <option value="tradicional">Tradicional</option>
              <option value="interactiva">Interactiva</option>
              <option value="proyectos">Por Proyectos</option>
            </select>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 py-6">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="tema">Tema</label>
            <input
              type="text"
              id="tema"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Ej. Números Fraccionarios"
            />
          </div>
        </div>
        <button className="flex justify-center items-center mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
          </svg>
          Generar Plan de Clase
        </button>
      </div>
    </section>

  )
}

export default page