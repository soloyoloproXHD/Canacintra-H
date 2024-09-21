import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBook, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
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
      <div className={`fixed top-[67px] left-0 h-[calc(100vh-67px)] w-52 bg-l100 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-20 overflow-y-auto`}>
        <div
          className="absolute inset-0"
          aria-label="close sidebar"
          onClick={toggleSidebar}
          style={{ display: isOpen ? 'block' : 'none' }}
        />

        {/* Flex para colocar "Cerrar" en la parte inferior */}
        <ul className="menu text-base-content p-4 flex flex-col h-full">
          <li><a href="#"><FontAwesomeIcon icon={faUserGroup} /> Grupos</a></li>
          <li><a href="#"><FontAwesomeIcon icon={faBook} /> Materias</a></li>

          {/* Empuja "Cerrar" hacia abajo */}
          <li className="mt-auto mb-0">
            <button onClick={toggleSidebar} className="cursor-pointer">
              <FontAwesomeIcon icon={faX} /> Cerrar
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
