import React from 'react'
import {ItemsNavbar} from "../UI/ItemsNavbar"

export const Navbar = () => {
  return (
    <nav className='flex space-x-6 p-4'>
       <ul className='flex space-x-6'>
        <ItemsNavbar text = "Inicio"/>
        <ItemsNavbar text = "¿Quien Soy"/>
        <ItemsNavbar text = "Contactame"/>
        <ItemsNavbar text = "Proyectos"/>        
       </ul>
    </nav>
  )
}
