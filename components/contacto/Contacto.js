import React, { useState } from 'react'
import useWindowSize from '@/hooks/useWindowSize'
import Image from 'next/image'
import { CiCirclePlus } from "react-icons/ci";

export default function Contacto(props) {
    const {isLogin, setIsLogin} = props
    const {width, height} = useWindowSize() 
    

  return (
    <>
        {isLogin === false ? <ContactoNoLogged isLogin={isLogin} setIsLogin={setIsLogin} width={width} height={height} /> 
        :       
        <ContactoLogged isLogin={isLogin} setIsLogin={setIsLogin}  />}
   </>
  )
}

function ContactoNoLogged(props) {
    const {width, height} = props
    const [change, setChange] = useState(true)
    return (
    <div className="bg-fondo-gris relative" id="contacto">
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.85155748978!2d-58.35792142506474!3d-34.633191359054024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a334b939f74725%3A0x3571b6d1cfddb34!2sCaboto%201129%2C%20C1157ABU%20DF%2C%20Argentina!5e0!3m2!1ses!2sve!4v1707484496887!5m2!1ses!2sve" width={width - 21} height={height + 200}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className='absolute left-72 top-40 w-fit '>
                <div>
                    <div className={change === true ? 'max-w-[350px] max-h-[200px] overflow-hidden' : 'max-w-[350px] max-h-[80px] overflow-hidden'}>
                        <div onClick={() => setChange(!change)} className={change === true ? 'absolute top-5 right-5 text-white text-4xl -rotate-45 cursor-pointer' : 'absolute top-5 right-5 text-white text-4xl cursor-pointer'}>
                            <CiCirclePlus />
                        </div>
                        <Image src="/home-office-569359_640.jpg" width={640} height={462} alt="image" />
                    </div>
                    {change === true ? <div className='bg-white/75 p-7'>
                        <p className='text-[#424242] font-semibold mb-5'>RODAMITRE</p>
                        <p className='text-[#424242] text-sm font-semibold'>Dirección:</p>
                        <p className='text-[#424242] text-sm '>Caboto 1129</p>
                        <p className='text-[#424242] text-sm'>La Boca (1157)</p>
                        <p className='text-[#424242] text-sm '>Buenos Aires</p>
                        <p className='text-[#424242] text-sm font-semibold'>Teléfono:</p>
                        <p className='text-[#424242] text-sm '>(+54) 4919-2299 rotativo</p>

                    </div>: <div className='bg-white/75 p-7'>
                        <p className={change === true ? 'text-[#424242] font-semibold mb-5' : 'text-[#424242] font-semibold'}>RODAMITRE</p>
                    </div>}
                </div>
            </div>
        </div>
        <div className='relative'>            
                <div className='px-12 pb-28 flex space-x-8 mt-10'>
                    <div className='w-3/4 space-y-5'>
                        <div className='flex justify-between space-x-5 '>
                            <div className='rounded-md bg-white border border-[#D9D9D9] w-1/2 p-2'>
                                <p className='text-[#969696] font-bold text-[8px] '>NOMBRE</p>
                                <input type='text' placeholder='Por favor ingrese su nombre' className='pl-4 w-full'/>
                            </div>
                            <div className='rounded-md bg-white border border-[#D9D9D9] w-1/2 p-2'>
                                <p className='text-[#969696] font-bold text-[8px] '>APELLIDO</p>
                                <input placeholder='Por favor ingrese su apellido' className='pl-4 w-full'/>
                            </div>
                        </div>
                        <div className='rounded-md bg-white border border-[#D9D9D9] w-full p-2'>
                                <p className='text-[#969696] font-bold text-[8px] '>EMAIL</p>
                                <input type='email' placeholder='Por favor ingrese su email ' className='pl-4 w-full'/>
                            </div>
                            <div className='rounded-md bg-white border border-[#D9D9D9] w-full p-2'>
                                <p className='text-[#969696] font-bold text-[8px] '>ASUNTO</p>
                                <input type='text' placeholder='Ingrese el asusnto por el cual nos contacta' className='pl-4 w-full'/>
                            </div>
                            <div className='rounded-md bg-white border border-[#D9D9D9] w-full p-2'>
                                <p className='text-[#969696] font-bold text-[8px] '>EMAIL</p>
                                <textarea rows="8" placeholder='Dejenos su mensaje' className='pl-4 w-full h-full'/>
                            </div>
                    </div>
                    <div className='w-1/4 space-y-5'>
                        <p className='text-[#535353] text-xl'>CONTACTENOS</p>
                        <p className='text-[#535353] text-lg'>Dirección:</p>
                        <p className='text-[#535353] text-sm'>Caboto 1129 CABA, Argentina</p>
                        <p className='text-[#535353] text-lg'>Teléfonos:</p>
                        <p className='text-[#535353] text-sm'>(+54)(11)3980-7075 (ROTATIVA)</p>
                        <p className='text-[#535353] text-lg'>Whatsapp:</p>
                        <div>
                            <p className='text-[#535353] text-sm'>Zona 1: (+54) (11) 4028-4558</p>
                            <p className='text-[#535353] text-sm'>Zona 2: (+54) (11) 2365-6769</p>
                            <p className='text-[#535353] text-sm'>Zona 3: (+54) (11) 5826-8501</p>
                        </div>
                        <p className='text-[#535353] text-lg'>Email:</p>
                        <div>
                            <p className='text-[#535353] text-sm'>ventas@rodamitre.com.ar</p>
                            <p className='text-[#535353] text-sm'>administración@rodamitre.com.ar</p>
                        </div>
                    </div>
                </div>            
        </div>
    </div>
  )
}

function ContactoLogged(props) {
    return(
        <>
        <div className='bg-white px-20 py-20'>
            <div className='relative pb-3 w-full border-b border-black'>
                <h2 className='text-gris font-bold text-2xl'>RODAMITRE, Distribuidor de autopartes</h2>
                <div className='absolute -bottom-[1px] left-0 h-1 w-[12%] bg-amarillo z-10'></div>
            </div>
            <div className='flex'>            
                <div className='w-1/2 p-10 '>
                    <div className='flex justify-center mb-5'>
                        <p className='text-black font-semibold text-xl'>Completa tus datos y déjanos tu consulta</p>
                    </div>
                    <div className='space-y-4'>
                        <div className='bg-[#FFF7E2] px-3 py-2 rounded-md'>
                            <input type='text' placeholder='Nombre' className='bg-transparent w-full text-black px-3'/>
                        </div>
                        <div className='bg-[#FFF7E2] px-3 py-2 rounded-md'>
                            <input type='mail' placeholder='Mail' className='bg-transparent w-full text-black px-3'/>
                        </div>
                        <div className='bg-[#FFF7E2] px-3 py-2 rounded-md'>
                            <input type='text' placeholder='Teléfono' className='bg-transparent w-full text-black px-3'/>
                        </div>
                        <div className='bg-[#FFF7E2] px-3 py-2 rounded-md'>
                            <textarea rows="8"  placeholder='Mensaje' className='bg-transparent w-full text-black px-3'/>
                        </div>
                        <div className='flex justify-center'>
                            <button className='text-white bg-azul px-5 py-1 rounded-md font-semibold text-lg'>Enviar</button>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 p-10'>
                     <div className='flex justify-center mb-5'>
                        <p className='text-black font-semibold text-xl'>Información de contacto</p>
                    </div>
                    <div className='text-gris text-xl mb-5'>
                         <p className='font-bold'>Dirección</p>
                         <p >Caboto 1129, La Boca (1157), Buenos Aires</p>
                    </div>
                    <div className='text-gris text-xl mb-5'>
                         <p className='font-bold'>Teléfono</p>
                         <p >3980-7075 (ROTATIVA)</p>
                    </div>
                    <div className='text-gris text-xl mb-5'>
                         <p className='font-bold'>Email</p>
                         <p >ventas@rodamitre.com.ar</p>
                         <p >administración@rodamitre.com.ar</p>
                    </div>
                    <div className='text-gris text-xl mb-5'>
                         <p className='font-bold'>Whatsapp</p>
                         <p >Zona 1: (+54) (11) 4028-4558</p>
                         <p >Zona 2: (+54) (11) 2365-6769</p>
                         <p >Zona 3: (+54) (11) 5826-8501</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}