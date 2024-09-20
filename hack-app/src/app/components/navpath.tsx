'use client';
import "../globals.css";
import Image from "next/image";
import logo from "../content/Logo.png";


export default function NavPath (){
  return (
        <header>
          <div className="navbar rounded-br-full bg-lnav">
            <div className="flex-1 ml-16">
              <div className="w-10 rounded-full transition-all bg-l950">
                  <Image src={logo} alt="" width={50} height={50}/>
                </div>
              <a className="btn btn-ghost text-xl text-l900">Adaptia</a>
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
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Cerrar Sesión</a>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-center text-l950">Juan Pedro Pedraza Leal</p>
              </div>
            </div>
          </div>
        </header>
  );
}
