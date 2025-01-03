import React from 'react'
import {ItemsNavbar} from "../UI/ItemsNavbar"


export const Navbar = () => {
  return (
    <nav className='flex space-x-6 p-4'>
       <ul className='flex space-x-6'>
        <ItemsNavbar text = "Inicio" link="/home"/>
        <ItemsNavbar text = "¿Quien Soy" link="/aboutUS"/>
        <ItemsNavbar text = "Contactame" link="/contactUS"/>
        <ItemsNavbar text = "Proyectos"/>        
       </ul>
    </nav>
  )
}
