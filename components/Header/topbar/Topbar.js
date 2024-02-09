import Auth from '@/components/auth/Auth'
import React, { useState } from 'react'
import { AiFillInstagram, AiOutlineClose } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";



export default function Topbar(props) {
  const {show, setShow} = props
  
  return (
    <>    
      
    <div className="flex justify-between w-full py-4 border-b border-white/50">
      <div className="flex gap-x-8 items-center ">
        <div className='flex gap-x-4'>
          <FaFacebookF />
          <AiFillInstagram />
          
        </div>
        <div className='flex items-center'>
          <p className='text-white text-xs m-0'>
            CONTÁCTANOS: <span className='font-bold'>(+54)4919-2299</span>
          </p>
        </div>
      </div>
      <div className='flex items-center'>
        <Auth 
        show={show} setShow={setShow}
        />
      </div>
    </div>
    </>
  )
}

