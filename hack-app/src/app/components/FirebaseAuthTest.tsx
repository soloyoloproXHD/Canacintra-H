"use client";

import { useState } from 'react';
import AuthForm from '../app/components/loginComponents/authForm';
import AuthProviders from '../app/components/loginComponents/authProviders';
// import Modal from '../components/Modal';


export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // lógica para manejar el inicio de sesión
    };

    return (
        <div className="flex justify-between items-center w-full min-h-screen overflow-x-hidden overflow-y-hidden" data-theme="cupcake">
            <div className="w-1/3 p-10">
                <div className="max-w-md relative flex flex-col p-4 rounded-md text-black">
                    <div className="text-2xl font-bold mb-14 text-[#1e0e4b] text-center">Inicio de sesión</div>

                    <AuthForm handleSubmit={handleLogin} />
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

                    <AuthProviders />
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


            <div className="w-2/3">

                {/* cuadro trasero */}
                <div className="relative bg-white rounded-lg shadow-lg w-full h-screen my-5 z-0">
                </div>



                <div className="relative w-full h-full z-10">
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

            {/* <Modal isOpen={isModalOpen} closeModal={closeModal} /> */}
        </div>
    );
}