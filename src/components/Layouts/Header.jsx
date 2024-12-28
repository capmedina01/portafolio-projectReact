import React from 'react'
import { Logo } from '../UI/Logo'
import { Title_header } from '../UI/Title_header'
import { Navbar } from '../UI/Navbar'

export const Header = () => {
  return (
    <div className='bg-primary flex items-center justify-between min-h-32'>
      <Logo/>
      <Title_header/>
      <Navbar/>
    </div>
  )
}
