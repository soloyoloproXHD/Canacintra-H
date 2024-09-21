'use client';
import "../globals.css";
import Image from "next/image";
import logo from "../content/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faRightToBracket } from '@fortawesome/free-solid-svg-icons';

export default function NavPath (){
  return (
        <header>
          <div className="navbar rounded-br-full bg-lnav shadow-md">
            <div className="flex-1 ml-16">
              <div className="w-10 rounded-full transition-all bg-l950">
                  <Image src={logo} alt="" width={50} height={50}/>
                </div>
              <a className="btn btn-ghost text-xl text-l900">Adaptia</a>
            </div>
            <div className="flex-none gap-2 pr-12">
              <div className="hidden sm:block items-center justify-center">
                <p className="text-center text-l900 font-semibold hover: hover:text-l950">Juan Pedro Pedraza Leal</p>
              </div>
              <div className="dropdown dropdown-end mr-5">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full transition-all hover:ring-4 ring-l50">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-xl"
                >
                  <li>

                    <a> <FontAwesomeIcon icon={faCircleUser} style={{color: "#0582e7",}} /> Perfil</a>
                  </li>
                  <li>
                    <a> <FontAwesomeIcon icon={faRightToBracket} style={{color: "#e8282e",}} /> Cerrar Sesión</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
  );
}
