"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faComment, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const Page = () => {
  const [materia, setMateria] = useState('');
  const [tipoEnsenanza, setTipoEnsenanza] = useState('');
  const [tema, setTema] = useState('');
  const [observaciones, setObservaciones] = useState('');
  const [output, setOutput] = useState([]);  // Cambiado a array para almacenar actividades
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Función para hacer la solicitud a la API
  const generatePlan = async () => {
    console.log(materia, tipoEnsenanza, tema, observaciones);
    setLoading(true);
    setError('');
    try {
      const prompt = `
      Crea un plan de clase para la materia de ${materia}, 
      enfocado a alumnos que posean la especialidad de aprendizaje siguiente: ${tipoEnsenanza} abordando el tema de ${tema}. Asegura una descripción detallada de las actividades. 
      Además, toma en cuenta las siguientes observaciones proporcionadas por el profesor: ${observaciones}.
      Esto debe de estar enfocado al nivel escolar primario.`;

      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ body: prompt }),
      });

      const data = await response.json();
      console.log(data)

      if (response.ok) {
        setOutput(data);  // Asume que `data` es el JSON con las actividades
        // document.getElementById('my_modal_1').showModal();  // Abrir el modal automáticamente
      } else {
        setError(data.error || 'Ocurrió un error desconocido.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('No se pudo conectar a la API.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="text-gray-600 body-font flex flex-col justify-center overflow-y-hidden">
      <div className="container px-5 my-2 mx-auto ">
        {/* Información del formulario */}
        <div className="flex flex-col text-center mb-5">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PLANEACIÓN EDUCATIVA</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Ayuda a tu planeación de clases</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Ingresa la información necesaria para que te ayudemos a crear planes de clase personalizados.
          </p>
        </div>

        {/* Inputs */}
        <div className="flex flex-wrap justify-center">
          {/* Materia */}
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 py-6">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="materia">Materia
              <div className="tooltip tooltip-bottom" data-tip="Ingresa la materia que impartirás. Ej. Matemáticas">
                <FontAwesomeIcon icon={faCircleInfo} className="ml-2 text-gray-500" />
              </div>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow input-info" placeholder="Ej. Matemáticas" value={materia} onChange={(e) => setMateria(e.target.value)} />
              <FontAwesomeIcon icon={faBook} />
            </label>
          </div>

          {/* Tipo de enseñanza */}
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 py-6">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="tipo-ensenanza">Tipo de Enseñanza
              <div className="tooltip tooltip-bottom" data-tip="Selecciona el tipo de enseñanza que aplicarás">
                <FontAwesomeIcon icon={faCircleInfo} className="ml-2 text-gray-500" />
              </div>
            </label>

            {/* <div className='flex justify-center items-center gap-2'>
              <div className="form-control items-center">
                <label className="label cursor-pointer gap-2">
                  <span className="label-text">Remember me</span>
                  <input type="checkbox" defaultChecked className="checkbox" />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Remember me</span>
                  <input type="checkbox" defaultChecked className="checkbox" />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Remember me</span>
                  <input type="checkbox" defaultChecked className="checkbox" />
                </label>
              </div>
            </div> */}

            <select className="select select-primary w-full" value={tipoEnsenanza} onChange={(e) => setTipoEnsenanza(e.target.value)}>
              <option disabled>Elige una opción</option>
              <option>Visual</option>
              <option>Auditivo</option>
              <option>Kinestésico</option>
            </select>
          </div>

          {/* Tema */}
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 py-6">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="tema">Tema
              <div className="tooltip tooltip-bottom" data-tip="Especifica el tema de la lección. Ej. Fracciones">
                <FontAwesomeIcon icon={faCircleInfo} className="ml-2 text-gray-500" />
              </div>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow rounded-md input-info" placeholder="Ej. Fracciones" value={tema} onChange={(e) => setTema(e.target.value)} />
              <FontAwesomeIcon icon={faComment} />
            </label>
          </div>

          {/* Observaciones */}
          <div className="lg:w-1/2 md:w-1/2 w-full px-4 py-6">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="observaciones">Observaciones
              <div className="tooltip tooltip-bottom" data-tip="Agrega cualquier observación relevante">
                <FontAwesomeIcon icon={faCircleInfo} className="ml-2 text-gray-500" />
              </div>
            </label>
            <textarea
              id="observaciones"
              rows={4}
              className="textarea textarea-info w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Escribe aquí tus observaciones..."
              value={observaciones}
              onChange={(e) => setObservaciones(e.target.value)}
            ></textarea>
          </div>
        </div>

        {/* Botón de generar */}
        <div className="mt-2">
          <button onClick={generatePlan} className="mx-auto flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-l500 disabled:pointer-events-none disabled:opacity-50 bg-l500 text-white shadow hover:bg-l600 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2">
            Generar plan
          </button>
        </div>

        {/* Modal */}
        <dialog id="my_modal_1" className="modal">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">Plan de clase generado</h3>

            {/* Generar tarjetas para cada actividad */}
            <div className="py-4 space-y-4">
              {output.map((actividad, index) => (
                <div key={index} className="card bg-gray-100 shadow-md rounded-md p-4">
                  {/* <h4 className="font-bold text-xl mb-2">{actividad.actividad}</h4>
                  <p><strong>Descripción:</strong> {actividad.descripcion}</p>
                  <p><strong>Estilo de Aprendizaje:</strong> {actividad.estilo}</p> */}
                </div>
              ))}
            </div>

            <div className="modal-action">
              <button className="btn">Cerrar</button>
            </div>
          </form>
        </dialog>

        {/* Spinner */}


        {loading &&
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" height="200px" width="200px" viewBox="0 0 200 200" className="pencil">
              <defs>
                <clipPath id="pencil-eraser">
                  <rect height="30" width="30" ry="5" rx="5"></rect>
                </clipPath>
              </defs>
              <circle transform="rotate(-113,100,100)" stroke-linecap="round" stroke-dashoffset="439.82" stroke-dasharray="439.82 439.82" stroke-width="2" stroke="currentColor" fill="none" r="70" className="pencil__stroke"></circle>
              <g transform="translate(100,100)" className="pencil__rotate">
                <g fill="none">
                  <circle transform="rotate(-90)" stroke-dashoffset="402" stroke-dasharray="402.12 402.12" stroke-width="30" stroke="hsl(223,90%,50%)" r="64" className="pencil__body1"></circle>
                  <circle transform="rotate(-90)" stroke-dashoffset="465" stroke-dasharray="464.96 464.96" stroke-width="10" stroke="hsl(223,90%,60%)" r="74" className="pencil__body2"></circle>
                  <circle transform="rotate(-90)" stroke-dashoffset="339" stroke-dasharray="339.29 339.29" stroke-width="10" stroke="hsl(223,90%,40%)" r="54" className="pencil__body3"></circle>
                </g>
                <g transform="rotate(-90) translate(49,0)" className="pencil__eraser">
                  <g className="pencil__eraser-skew">
                    <rect height="30" width="30" ry="5" rx="5" fill="hsl(223,90%,70%)"></rect>
                    <rect clip-path="url(#pencil-eraser)" height="30" width="5" fill="hsl(223,90%,60%)"></rect>
                    <rect height="20" width="30" fill="hsl(223,10%,90%)"></rect>
                    <rect height="20" width="15" fill="hsl(223,10%,70%)"></rect>
                    <rect height="20" width="5" fill="hsl(223,10%,80%)"></rect>
                    <rect height="2" width="30" y="6" fill="hsla(223,10%,10%,0.2)"></rect>
                    <rect height="2" width="30" y="13" fill="hsla(223,10%,10%,0.2)"></rect>
                  </g>
                </g>
                <g transform="rotate(-90) translate(49,-30)" className="pencil__point">
                  <polygon points="15 0,30 30,0 30" fill="hsl(33,90%,70%)"></polygon>
                  <polygon points="15 0,6 30,0 30" fill="hsl(33,90%,50%)"></polygon>
                  <polygon points="15 0,20 10,10 10" fill="hsl(223,10%,10%)"></polygon>
                </g>
              </g>
            </svg>
          </div>
        }
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </section>
  );
};

export default Page;
