'use client'; // Marca el componente como Client Component
import { useState } from "react";
import "../globals.css";
import "@mantine/core/styles.css";
import NavPath from "../components/navpath";
import Sidebar from "../components/sidebar";
import 'animate.css';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <html lang="es">
      <body data-theme="cupcake" className="h-screen flex relative">
        {/* Contenedor para el sidebar y el contenido */}
        <div className={`flex flex-col w-full`}>
          <NavPath />
          <div className="flex flex-1">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-52' : 'ml-0'}`}>
              <div  className="p-4 animate__animated animate__fadeIn animate__delay-1s">
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
