import React from 'react'

export const ItemsNavbar = ({text, link}) => {
  return (
    <li><a href={link} className="text-white hover:underline">{text}</a></li>
  )
}