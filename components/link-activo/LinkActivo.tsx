 'use client';
import React from 'react';
import Link from 'next/link';
import estilos from './LinkActivo.module.css'
import { usePathname } from 'next/navigation';

interface Propiedades {
  ruta: string;
  nombre: string;
}

export const LinkActivo = ({ ruta, nombre}: Propiedades) => {

 const vistaActual =  usePathname();
 
  return (
    <Link className={`${estilos.link} ${ (vistaActual == ruta) && estilos.activeLink}`} href={ruta}>
      {nombre}
    </Link>
  );
};
