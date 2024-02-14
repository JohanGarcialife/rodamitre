import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Topbar from './topbar/Topbar'
import Menu from './menu/Menu'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";


export default function Header(props) {
    const {show, setShow, handleOpen, handleClose, isLogin, setIsLogin} = props
    

    return (
   <>
        {isLogin === false ? <HeaderNoLogged isLogin={isLogin} setIsLogin={setIsLogin}/> 
        :       
        <HeaderLogged show={show} setShow={setShow} handleOpen={handleOpen} handleClose={handleClose} isLogin={isLogin} setIsLogin={setIsLogin}/>
        }
   </>
    )
}

function HeaderNoLogged(props) {
  const {show, setShow, handleOpen, handleClose, isLogin, setIsLogin} = props
  const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 720) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);
    }, []);

  return (
      <>
           { scrolled === false ? <div className='absolute top-0 w-full z-50'>            
                <div className='px-12'>
                    <Topbar show={show} setShow={setShow} handleOpen={handleOpen} handleClose={handleClose}/>
                    <Menu />
                </div>
            </div> : <div className='fixed bg-azul/75 top-0 w-full z-50'>            
                <div className='px-12'>
                    <Topbar show={show} setShow={setShow} handleOpen={handleOpen} handleClose={handleClose}/>
                    <Menu />
                </div>
            </div>}
        </>
  )
}

function HeaderLogged(props) {
    const {show, setShow, handleOpen, handleClose, isLogin, setIsLogin} = props
  return(
      <div className='flex items-end justify-between bg-azul px-12 py-3'>
        <IoArrowBackCircleOutline onClick={() => setIsLogin(!isLogin)} className='absolute top-5 right-5 text-white text-4xl font-light cursor-pointer'/>
        <Image src="/rodamitre-logo.png" height={150} width={300} alt="Roadmitre logo"  className="h-fit"/>
        <div>
          
            <div className='py-5 mb-5 border-b border-white w-full'>
              <p className='text-white text-2xl  text-center'>Búsquedas</p>
              {/* <input type='text ' className='bg-transparent' /> */}
            </div>
          
            <div className='flex items-center space-x-5'>
              <p className='text-amarillo text-2xl  text-center cursor-pointer'>Familia</p>
              <p className='text-amarillo text-2xl  text-center cursor-pointer'>Vehículo</p>
              <p className='text-amarillo text-2xl  text-center cursor-pointer'>Rápida</p>
            </div>
        </div>
         <div className='flex items-center space-x-5'>
          <div className='flex items-end space-x-1 cursor-pointer'>
            <p className='text-amarillo text-2xl text-center'>Ofertas</p>
            <IoIosArrowDown className='text-amarillo text-2xl  text-center'/>
          </div>

          <div className='flex items-end space-x-1 cursor-pointer'>
            <p className='text-amarillo text-2xl text-center'>Reclamos</p>
            <IoIosArrowDown className='text-amarillo text-2xl  text-center'/>
          </div>
          <div className='flex items-end space-x-1 cursor-pointer'>
            <p className='text-amarillo text-2xl  text-center'>Administración</p>
            <IoIosArrowDown className='text-amarillo text-2xl  text-center'/>
          </div>
         </div>
      </div>
    )
}