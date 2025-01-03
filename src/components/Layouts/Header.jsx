import React from 'react'
import { Logo } from '../UI/Logo'
import { Title_header } from '../UI/Title_header'
import { Navbar } from '../UI/Navbar'

export const Header = () => {
  return (
    <div className='bg-[#01265A] flex items-center justify-between h-32'>
      <Logo/>
      <Title_header/>
      <Navbar/>
    </div>
  )
}
