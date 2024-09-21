import React from 'react';

const page = () => {
    return (
        <div className='min-h-screen justify-center'>
            <div className="grid grid-cols-6 grid-rows-6 gap-4 rounded-md h-full w-auto px-5 pt-3 pb-2 bg-white min-h-screen justify-center">

                {/* Card 1 */}
                <div className="col-span-3 row-span-3 shadow-md border border-gray-200 rounded-md hover:scale-[102%] transition duration-300 p-4 flex flex-col gap-3
                bg-[#6DDAF2]">
                    {/* Título de la Card */}
                    <div className='flex justify-between items-center gap-2'>

                        <div>
                            <p className='text font-bold text-gray-800'>Descripción</p>
                        </div>

                        <div className='flex justify-around items-center'>
                            <p className='text-sm font-semibold text-gray-700 me-1'>Materia:</p>
                            <p className='text-xs text-gray-600 me-2'>Ciencias naturales</p>
                            <p className='text-sm font-semibold text-gray-700 me-1'>Tema:</p>
                            <p className='text-xs text-gray-600 me-2'>El ciclo del agua</p>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-span-3 row-span-3 col-start-4 shadow-md border border-gray-200 rounded-md hover:scale-[102%] transition duration-300 p-5 
                bg-[#6EBF49] opacity-75">
                    {/* Título de la Card */}
                    <p className='text font-bold text-gray-800'>Recomendaciones</p>
                </div>

                {/* Card 3 */}
                <div className="col-span-4 row-span-3 row-start-4 shadow-md border border-gray-300 rounded-md hover:scale-[102%] transition duration-300 p-5
                bg-[#6EBF49] bg-opacity-75">
                    {/* Título de la Card */}
                    <p className='text font-bold text-gray-800'>Puntos a cumplir</p>
                </div>

                {/* Card 4 */}
                <div className="col-span-2 row-span-3 col-start-5 row-start-4 shadow-md border border-gray-300 rounded-md hover:scale-[102%] transition duration-300 p-5
                bg-[#6DDAF2]">
                    {/* Título de la Card */}
                    <p className='text font-bold text-gray-800'>Materiales</p>
                </div>

            </div>
        </div>

    );
};

export default page;