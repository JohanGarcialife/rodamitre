import React from 'react'
import Image from "next/image"

export default function Distribuidores() {
  return (
    <div className="bg-[#f5f5f5] text-black relative flex justify-between py-10 px-28 ">
        
        <div className='w-1/4'>
          <p className='text-gris mb-3 text-lg'>DISTRIBUIDOR OFICIAL:</p>
          <div className='h-1 w-1/4 bg-gris '></div>
        </div>
        <div className='w-full flex items-center justify-between'>
      
            <Image src="/logo-timken-2.png" height={100} width={200} alt="logo"  className=""/>
            <Image src="/logo-dayco-2.png" height={100} width={200} alt="logo"  className=""/>
            <Image src="/logo-frasle-2.png" height={100} width={200} alt="logo"  className=""/>
            <Image src="/logo-cofap-2.png" height={100} width={200} alt="logo"  className=""/>
            <Image src="/logo-fremax-2.png" height={100} width={200} alt="logo"  className=""/>
           
        </div>       
    </div>
  )
}
