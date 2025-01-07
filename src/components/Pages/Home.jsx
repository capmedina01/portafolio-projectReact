import React from 'react'
import { Section_bg } from '../UI/Section_bg'
import Bg from "../../assets/img/fondo_home.jpg"

export const Home = () => {
  return (
    <div className='w-screen'>
      <Section_bg path={Bg} name="seccion home"/>
     
    </div>
  )
}
