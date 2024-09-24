'use client'; // Asegúrate de que este componente se ejecute solo en el cliente

import "../globals.css";
import Image from "next/image";
import logo from "../content/Logo.png";
import { useRouter } from 'next/navigation'; // Cambiar a next/navigation
import { logout } from "../components/loginComponents/useFirebaseAuth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function NavPath() {
  const router = useRouter(); // Uso del hook correcto para navegación en el directorio app

  const handleLogout = async () => {
    try {
      await logout(router); // Realiza el logout
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <header>
      <div className="navbar rounded-br-full bg-lnav shadow-md">
        <div className="flex-1 ml-16" >
          <div className="w-10 rounded-full transition-all bg-l950">
            <Image src={logo} alt="" width={50} height={50} />
          </div>
          <a className="ms-3 font-semibold text-xl text-l900 hover:font" href="/home">Adaptia</a>
        </div>
        
        <div className="flex-none gap-2 pr-12">
          
          <div className="md:flex items-center justify-center hidden">
            <p className="text-center text-l900 font-semibold hover: hover:text-l950">
              Juan Pedro Pedraza Leal
            </p>
          </div>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full transition-all hover:ring-4 ring-l50">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>

                  Perfil</a>
              </li>
              <li>
                <a onClick={handleLogout}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                  </svg>

                  Cerrar Sesión</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
