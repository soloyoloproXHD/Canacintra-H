"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

import logo from '../content/Logo-Adaptia_Morado.png';
import Image from 'next/image';

export default function Home() {
  const openModal = () => {
    const modal = document.getElementById('my_modal_1') as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div className="flex justify-between items-center w-full min-h-screen overflow-x-hidden overflow-y-hidden" data-theme="cupcake">
      <div className="w-1/3 p-10">
        <div className="max-w-md relative flex flex-col p-4 rounded-md text-black ">
          <div className="text-2xl font-bold mb-14 text-[#1e0e4b] text-center">
            Inicio de sesión
          </div>
          <form className="flex flex-col gap-3">
            <div className="block relative">

              {/* Input */}
              <label className="input input-bordered flex items-center gap-2 bg-white mx-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="text" className="grow" placeholder="Usuario" />
              </label>

              {/* Input */}
              <label className="input input-bordered flex items-center gap-2 bg-white mx-6 mt-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd" />
                </svg>
                <input type="password" className="grow" placeholder="Contraseña" />
              </label>
            </div>
            <div className="flex justify-end items-center mx-6">
              <a className="text-sm text-[#5C4343] text-end underline hover:text-black" href="#">
                Olvidaste tu contraseña?
              </a>
            </div>
            <div className="flex justify-end items-center gap-5">

              <button type="submit" className="bg-purple-400 hover:bg-purple-500 transition duration-300 w-max px-6 py-2 rounded-md text-white text-sm font-normal mt-3 flex justify-center items-center gap-2">
                <FontAwesomeIcon icon={faRightToBracket} />
                Iniciar sesión
              </button>
            </div>
          </form>
          <div className="text-sm text-center mt-[1.6rem]" onClick={openModal}>
            ¿No tienes una cuenta? <a className="text-sm text-[#7747ff]" href="#">Registrate aquí</a>
          </div>

          <div>
            <div className="flex justify-center items-center gap-2 mt-5">
              <div className="w-1/3 mx-5 h-0.5 bg-[#7747ff]"></div>
              <div className="text-[#7747ff]">O</div>
              <div className="w-1/3 mx-5 h-0.5 bg-[#7747ff]"></div>
            </div>
          </div>

          <div className="flex justify-around font-semibold text-white items-center w-full gap-2 transition duration-300 mt-3">
            <div className="w-[1/2]">
              <button className="flex justify-center hover:font-bold items-center rounded-xl px-5 py-3 bg-red-500 hover:bg-red-600 transition duration-300 gap-2">
                <FontAwesomeIcon icon={faGoogle} /> Google
              </button>
            </div>
            <div>
              <button className="hover:font-bold hover:text-gray-300 transition duration-300 bg-blue-500 px-5 py-3 rounded-xl">
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </button>
            </div>
          </div>

          <div className="text-[#5C4343] flex justify-center items-center gap-4 mt-10">
            <a href="#">
              Contactanos
            </a>
            <div className="rounded-full h-3 w-3 bg-[#5C4343]"></div>
            <a href="#">
              Acerca de
            </a>
          </div>

        </div>
      </div>

      {/* parte derecha */}

      <div className="w-2/3">

        {/* cuadro trasero */}
        <div className="relative bg-white rounded-lg shadow-lg w-full h-screen my-5 z-0">
        </div>


        <Image width={45} height={45} src={logo}  alt='image' className='z-30'/>



        <div className="relative w-full h-full z-10" >  
          <div className="absolute top-0 right-0 transform translate-x-[35rem] -translate-y-[55rem] rounded-full w-[70rem] h-40 bg-purple-400 -rotate-45">
          </div>
          <div className="absolute top-0 right-0 transform translate-x-[13rem] -translate-y-[55rem] rounded-full w-[40rem] h-10 bg-purple-400 -rotate-45">
          </div>
          <div className="absolute top-0 right-0 transform translate-x-[1rem] -translate-y-[55rem] rounded-full w-[25rem] h-9 bg-purple-500 -rotate-45">
          </div>
          <div className="absolute top-0 right-0 transform translate-x-[51rem] -translate-y-[55rem] rounded-full w-[75rem] h-9 bg-purple-500 -rotate-45">
          </div>
        </div>
      </div>

      {/* Modal */}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

    </div>
  );
}