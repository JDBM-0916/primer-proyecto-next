import React from 'react';
import Link from 'next/link';
import { LinkActivo } from '@/components';
// iconos
import {Home} from 'iconic-react';

const enlaces_nav = [
    { ruta: '/about', nombre: 'About' },
    { ruta: '/contact', nombre: 'Contact', },
    { ruta: '/pricing', nombre: 'Pricing', }
];

export const NavBar = () => {
    return (
        <nav className='flex bg-teal-500 bg-opacity-30 p-2 m-2 rounded-lg'>
            <Link className="mr-4 ml-1 flex items-center" href="/">
                <Home className='mx-1' size={16} />
                <span>Home</span>
            </Link>
            <div className="flex flex-1"></div>
            {enlaces_nav.map(enlace => (
                <LinkActivo key={enlace.ruta} {...enlace}/>
            ))}
        </nav>
    );
};
