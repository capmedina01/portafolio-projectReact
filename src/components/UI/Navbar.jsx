import React from 'react'
import {ItemsNavbar} from "../UI/ItemsNavbar"

export const Navbar = () => {
  return (
    <nav className='flex items-center justify-between'>
       <ul>

        <ItemsNavbar text = "Inicio"/>
        <ItemsNavbar text = "¿Quien Soy"/>
        <ItemsNavbar text = "Contactame"/>
        <ItemsNavbar text = "Proyectos"/>
        
       </ul>
    </nav>
  )
}
