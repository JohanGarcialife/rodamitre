import { useState } from "react";
import { Inter } from "next/font/google";
import Layout from "@/layout/Layout";
import HeroSection from "@/components/heroSection/HeroSection"
import Distribuidores from "@/components/distribuidores/Distribuidores";
import Nosotros from "@/components/nosotros/Nosotros";
import Productos from "@/components/productos/Productos";
import Contacto from "@/components/contacto/Contacto";
import { Modal } from "@mui/material";
import { IoClose } from "react-icons/io5";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false)

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    {isLogin === false ?
    <>
    <Layout handleOpen={handleOpen} handleClose={handleClose} isLogin={isLogin} setIsLogin={setIsLogin} >
      <HeroSection isLogin={isLogin} setIsLogin={setIsLogin}/> 
      <Distribuidores />
      <Nosotros isLogin={isLogin} setIsLogin={setIsLogin}/>
      <Productos/>
      <Contacto isLogin={isLogin} setIsLogin={setIsLogin}/>
    </Layout>
    <Modal open={open}
        onClose={handleClose}
        className="max-w-screen"
        >
          <div className="flex items-center justify-center w-screen h-screen">            
            <div className='relative w-96 bg-[#EDEDED] p-10 rounded-sm'>
               <IoClose className="text-gris/75  absolute top-3 right-3 cursor-pointer " />
              <p className='text-amarillo text-lg font-semibold'>SIGN IN YOUR ACCOUNT TO HAVE ACCESS TO DIFFERENT FEATURES</p>
              <div className="my-5 space-y-3">
                <div className='rounded-md bg-white border border-[#D9D9D9] w-full p-2'>
                     <p className='text-[#969696] font-bold text-[10px] '>USERNAME</p>
                     <input type='text' placeholder='EG; james-smith' className='pl-4 w-full'/>
                  </div>
                  <div className='rounded-md bg-white border border-[#D9D9D9] w-full p-2 '>
                    <p className='text-[#969696] font-bold text-[10px] '>PASSWORD</p>
                    <input type='password' placeholder='Type password' className='pl-4 w-full'/>
                  </div>
              </div>
              <div className="flex item-center space-x-2 mb-5">
                <input type="checkbox" className="rounded-sm " />
                <label className="text-gris text-xs">REMEMBER ME</label>
              </div>
              <button onClick={() => setIsLogin(!isLogin)} className="bg-amarillo rounded-sm px-5 py-2">LOGIN</button>
              <div clasName='!flex items-center mt-5'>
                <div className="border-r border-r-gris pr-5 mr-5 w-fit">
                  <p className="text-xs text-gris">CREATE AN ACCOUNT</p>
                </div>
                <p className="text-xs text-gris w-fit">FORGOT YOUR PASSWORD?</p>
              </div>
            </div> 
          </div>
    </Modal> 
    </>
       : <Layout handleOpen={handleOpen} handleClose={handleClose} isLogin={isLogin} setIsLogin={setIsLogin} >
            <HeroSection isLogin={isLogin} setIsLogin={setIsLogin}/>
            <Nosotros isLogin={isLogin} setIsLogin={setIsLogin}/>
            <Contacto isLogin={isLogin} setIsLogin={setIsLogin}/> 
         </Layout> 
       }
    </>
  );
}
