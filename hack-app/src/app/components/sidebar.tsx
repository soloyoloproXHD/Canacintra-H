import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "../globals.css";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  return (
    <div className="relative">
      {/* Botón para abrir/cerrar el menú */}
      <button onClick={toggleSidebar} className="btn bg-l600 z-10">
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Sidebar que aparece justo debajo del navbar */}
      <div className={`fixed top-[67px] left-0 h-full w-52 bg-l100 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-20`}>
        <div
          className="absolute inset-0"
          aria-label="close sidebar"
          onClick={toggleSidebar}
          style={{ display: isOpen ? 'block' : 'none' }}
        />

        <ul className="menu text-base-content p-4">
          <li><a href="#">Grupos</a></li>
          <li><a href="#">Materias</a></li>
          <li>
            <button onClick={toggleSidebar} className="cursor-pointer">Cerrar</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
