import React from 'react'
import GoogleMapReact from 'google-map-react'; 

export default function Contacto() {
    const defaultProps = {
    center: {
      lat: -34.632498376666796, 
      lng: -58.35897285103348
    },
    zoom: 11
  };

  return (
    <div className="bg-fondo-gris relative">
        <div  style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >                
            </GoogleMapReact>
        </div>
        <div className='absolute '>
            <div className='px-28 pb-28 flex space-x-8 '>
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
