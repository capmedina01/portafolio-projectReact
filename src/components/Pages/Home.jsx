import React from 'react'
import BackGround from "../../assets/img/fondo_home.jpg"
import BGhome from "../../assets/img/bg_developer.jpg"
import profilehome from "../../assets/img/developer.jpg"


export const Home = () => {
  return (
    <div className='w-screen'> 
      <img src={BGhome} alt="fondo" />
      <img src={profilehome} alt='perfil' className='absolute left-[60%] top-[250px]'/>
      <div className='flex-grow justify-around absolute left-[10%] top-[80%] w-[600px] h-[250px] text-white text-[32px]'>
        <h2>Hola!</h2>
        <p>
           Soy Carlos Andres Perdomo Medina <br />
           tecnólogo y estudiante del SENA 
           en Análisis y Desarrollo de Software
       
        </p>
      </div>

    </div>
  )
}
