import React, { useState } from 'react'
import Image from "next/image"

export default function Menu() {
  const [active, setActive] = useState("#")


  return (
    <div className='flex items-center space-x-8 pb-4 pt-2'>
      <Image src="/rodamitre-logo.png" height={100} width={200} alt="Roadmitre logo"  className=""/>
      <div className='flex space-x-1 items-center'>
        <div className={active === "#" ? 'cursor-pointer rounded-sm px-4 py-1 bg-amarillo' : 'cursor-pointer rounded-sm px-4 py-1 hover:animate-open hover:bg-amarillo '}>
          <p className='text-white'>
            INICIO
          </p>
        </div>
        <div className={active === "#nosotros" ? 'cursor-pointer rounded-sm px-4 py-1 bg-amarillo' : 'cursor-pointer rounded-sm px-4 py-1 hover:animate-open hover:bg-amarillo '}>
          <p className='text-white'>
            NOSOTROS
          </p>
        </div>
        <div className={active === "#productos" ? 'cursor-pointer rounded-sm px-4 py-1 bg-amarillo' : 'cursor-pointer rounded-sm px-4 py-1 hover:animate-open hover:bg-amarillo '}>
          <p className='text-white'>
            PRODUCTOS
          </p>
          
        </div>
        <div className={active === "#marcas" ? 'cursor-pointer rounded-sm px-4 py-1 bg-amarillo' : 'cursor-pointer rounded-sm px-4 py-1 hover:animate-open hover:bg-amarillo '}>
          <p className='text-white'>
            MARCAS
          </p>
        </div>
        <div className={active === "#contacto" ? 'cursor-pointer rounded-sm px-4 py-1 bg-amarillo' : 'cursor-pointer rounded-sm px-4 py-1 hover:animate-open hover:bg-amarillo '}>
          <p className='text-white'>
            CONTACTO
          </p>
        </div>
      </div>
    </div>
  ) 
}
