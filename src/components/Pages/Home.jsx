import React from 'react'
import BackGround from "../../assets/img/fondo_home.jpg"
import BGhome from "../../assets/img/bg_developer.jpg"
import profilehome from "../../assets/img/developer.jpg"


export const Home = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">
      
      {/* Imagen de fondo */}
      <img 
        src={BGhome} 
        alt="fondo" 
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Contenedor del contenido */}
      <div className="relative flex items-center justify-between w-full max-w-6xl px-10 z-10">
        
        {/* Texto a la izquierda */}
        <div className="text-white text-left max-w-lg">
          <h2 className="text-4xl sm:text-5xl font-bold">Hola!</h2>
          <p className="text-lg sm:text-xl mt-4">
            Soy <span className="font-semibold">Carlos Andres Perdomo Medina</span> <br />
            Tecnólogo y estudiante del SENA en Análisis y Desarrollo de Software.
          </p>
        </div>

        {/* Imagen de perfil a la derecha */}
        <img 
          src={profilehome} 
          alt="perfil" 
          className="w-[250px] sm:w-[300px] md:w-[350px] rounded-full shadow-lg"
        />

      </div>
    </div>
  );
}

