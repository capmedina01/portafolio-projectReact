import React from 'react'
import { Logo } from '../UI/Logo'
import { Title_header } from '../UI/Title_header'
import { Navbar } from '../UI/Navbar'

export const Header = () => {
  return (
    <div className="bg-[#01265A] flex flex-wrap items-center justify-between min-h-24 md:min-h-32 px-4 md:px-8">
      <Logo />
      <Title_header />
      <Navbar />
    </div>
  )
}

