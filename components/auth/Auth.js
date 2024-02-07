import React, { useState } from 'react'

export default function Auth(props) {
    const {show, setShow} = props
  return (
    <div className='flex items-center gap-x-8 mr-20'>
        <Registro 
        show={show} setShow={setShow}
        />
        <Login/>
    </div>
  )
}

function Registro(props) {
    const {show, setShow} = props
  return (
    <>
    <div 
    onClick={() => setShow(!show)} 
    className='font-bold text-white text-xs hover:opacity-50 cursor-pointer'>
        <p>
            REGISTRATE AQUÍ
        </p>
    </div>
    </>
  )
}

function Login() {
  return (
    <div className='font-bold text-white text-xs hover:opacity-50 cursor-pointer'>
        <p>
            LOGIN
        </p>
    </div>
  )
}