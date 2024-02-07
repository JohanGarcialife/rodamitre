import React, { useState } from 'react'
import Image from "next/image"

export default function Menu() {
  const [active, setActive] = useState("#")


  return (
    <div className='flex items-center space-x-12 py-4'>
      <Image src="/rodamitre-logo.png" height={100} width={200} alt="Roadmitre logo"  className=""/>
      <div className='flex space-x-2 items-center'>
        <div className={active === "#" ? 'cursor-pointer rounded-sm px-4 py-1 bg-amarillo' : 'cursor-pointer rounded-sm px-4 py-1 hover:animate-open hover:bg-amarillo '}>
          <p >
            INICIO
          </p>
        </div>
        <div className={active === "#nosotros" ? 'cursor-pointer rounded-sm px-4 py-1 bg-amarillo' : 'cursor-pointer rounded-sm px-4 py-1 hover:animate-open hover:bg-amarillo '}>
          <p >
            NOSOTROS
          </p>
        </div>
        <div className={active === "#productos" ? 'cursor-pointer rounded-sm px-4 py-1 bg-amarillo' : 'cursor-pointer rounded-sm px-4 py-1 hover:animate-open hover:bg-amarillo '}>
          <p >
            PRODUCTOS
          </p>
          
        </div>
        <div className={active === "#marcas" ? 'cursor-pointer rounded-sm px-4 py-1 bg-amarillo' : 'cursor-pointer rounded-sm px-4 py-1 hover:animate-open hover:bg-amarillo '}>
          <p >
            MARCAS
          </p>
        </div>
        <div className={active === "#contacto" ? 'cursor-pointer rounded-sm px-4 py-1 bg-amarillo' : 'cursor-pointer rounded-sm px-4 py-1 hover:animate-open hover:bg-amarillo '}>
          <p >
            CONTACTO
          </p>
        </div>
      </div>
    </div>
  ) 
}
