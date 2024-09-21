import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEarListen, faHand, faBook, faComment, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const page = () => {
  return (
    <section className="text-gray-600 body-font bg-white min-h-screen flex flex-col justify-center">
      <div className="container px-5 my-2 mx-auto">
        <div className="flex flex-col text-center w-full mb-5">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PLANEACIÓN EDUCATIVA</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Ayuda a tu planeación de clases</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Ingresa la información necesaria para que te ayudemos a crear planes de clase personalizados.
          </p>
        </div>

        {/* materia */}
        <div className="flex flex-wrap justify-center">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 py-6">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="materia">Materia
              {/* Tooltip */}
              <div className="tooltip tooltip-bottom" data-tip="Ingresa la materia que impartirás. Ej. Matemáticas">
                <FontAwesomeIcon icon={faCircleInfo} className="ml-2 text-gray-500" />
              </div>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow input-info" placeholder="Ej. Matemáticas" />
              <FontAwesomeIcon icon={faBook} />
            </label>
          </div>

          {/* tipo de enseñanza */}
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 py-6">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="tipo-ensenanza">Tipo de Enseñanza
              {/* Tooltip */}
              <div className="tooltip tooltip-bottom" data-tip="Selecciona el tipo de enseñanza que aplicarás">
                <FontAwesomeIcon icon={faCircleInfo} className="ml-2 text-gray-500" />
              </div>
            </label>
            <select className="select select-primary w-full">
              <option disabled>Elige una opción</option>
              <option>Visual</option>
              <option>Auditivo</option>
              <option>Kinestésico</option>
            </select>
          </div>

          {/* tema */}
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 py-6">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="materia">Tema
              {/* Tooltip */}
              <div className="tooltip tooltip-bottom" data-tip="Especifica el tema de la lección. Ej. Fracciones">
                <FontAwesomeIcon icon={faCircleInfo} className="ml-2 text-gray-500" />
              </div>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow rounded-md input-info" placeholder="Ej. Fracciones" />
              <FontAwesomeIcon icon={faComment} />
            </label>
          </div>

          {/* Observaciones */}
          <div className="lg:w-1/2 md:w-1/2 w-full px-4 py-6">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="observaciones">Observaciones
              {/* Tooltip */}
              <div className="tooltip tooltip-bottom" data-tip="Agrega cualquier observación relevante">
                <FontAwesomeIcon icon={faCircleInfo} className="ml-2 text-gray-500" />
              </div>
            </label>
            <textarea
              id="observaciones"
              rows={4}
              className="textarea textarea-info w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Escribe aquí tus observaciones..."
            ></textarea>
          </div>
        </div>

        {/* Botón de generar */}
        <div className="mt-2">
          <button className="mx-auto flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-l500 disabled:pointer-events-none disabled:opacity-50 bg-l500 text-white shadow hover:bg-l600 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-l500 hover:ring-offset-2">
            <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
            <div className="ml-2 flex items-center gap-1 text-sm md:flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
              </svg>
              <div className="flex items-center">
                <span className="ml-1 text-white">Generar</span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default page;
