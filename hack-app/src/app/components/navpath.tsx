'use client'; // Asegúrate de que este componente se ejecute solo en el cliente

import "../globals.css";
import Image from "next/image";
import logo from "../content/Logo.png";
import { useRouter } from 'next/navigation'; // Cambiar a next/navigation
import { logout } from "../components/loginComponents/useFirebaseAuth";

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
                <a className="justify-between">Perfil</a>
              </li>
              <li>
                <a onClick={handleLogout}>Cerrar Sesión</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-center text-l900 font-semibold hover: hover:text-l950">
              Juan Pedro Pedraza Leal
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
