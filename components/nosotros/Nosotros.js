import React, { useState } from 'react'
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdAvTimer } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaRegHandshake } from "react-icons/fa6";
import { RiTeamLine } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { GoDotFill } from "react-icons/go";


export default function Nosotros(props) {
    const {isLogin, setIsLogin} = props 
        
  return (
    <>
        {isLogin === false ? <NosotrosNoLogged isLogin={isLogin} setIsLogin={setIsLogin}/> 
        :       
        <NosotrosLogged isLogin={isLogin} setIsLogin={setIsLogin}  />}
   </>
  )
}

function NosotrosNoLogged(props) {
    return (
    <>
        <div className='px-12 py-28 bg-white' id="nosotros">
            <h2 className='text-amarillo text-6xl font-semibold mb-5'>NUESTRA TRAYECTORIA</h2>
            <h3 className='text-black font-light text-3xl mb-10'>25 AÑOS EN LA DISTRIBUCION DE AUTOPARTES</h3>

            <div className='flex justify-between space-x-11'>
                <div className='w-1/3'>
                    <p className='text-gris font-extrabold text-4xl mb-5'>Nos dedicamos a cubrir las necesidades de las casas de repuestos automotrices</p>
                    <div className='h-1 w-1/4 bg-gris/50 '></div>
                </div>
                <div className='w-1/3'>
                    <p className='text-gris text-sm'>Rodamitre nace en el año 1989 en la Ciudad Autónoma de Buenos Aires y hoy con más de 25 años en el mercado se ha convertido en un referente en la distribución de autopartes, impulsada desde sus inicios por la búsqueda permanente de la excelencia en el servicio, calidad y el capital humano. Nos dedicamos a cubrir las necesidades de las casas de repuestos automotrices con la venta de todo lo necesario para motor, suspensión, embrague, frenos, transmisión, rodamientos y encendido.</p>
                </div>
                <div className='w-1/3'>
                    <p className='text-gris text-sm'>Nuestra estrategia comercial se apoya en sólidas bases de conducta que nos han consolidado como una de las opciones más atractivas para Clientes y Proveedores. Nuestro objetivo es continuar con el crecimiento constante y sustentable que venimos desarrollando desde hace años, trabajando para ofrecer a nuestros clientes una propuesta superadora a través de diferenciales estratégicos de nuestra organización.</p>
                </div>
            </div>
        </div>
        <div className='bg-[#f5f5f5] px-12 py-28'>
            <div className='flex justify-between space-x-4 w-full'>
                <div className='w-1/3'>
                    <div> 
                        <Image src="/icono-vision.png" height={100} width={100} alt="logo"  className=""/>
                    </div>
                    <p className='text-amarillo text-2xl font-semibold mt-5 mb-3'>VISION</p>
                    <p className='text-black'>Efficiently re-engineer pandemic processes vis-a-vis bricks-and-clicks partnerships. Proactively coordinate fully researched relationships rather than.</p>
                </div>
                <div className='w-1/3 text-center'>
                    <div className='flex justify-center'>
                        <Image src="/icono-servicio2.png" height={100} width={100} alt="logo"  className=""/>      
                    </div>
                    <p className='text-amarillo text-2xl font-semibold mt-5 mb-3'>VISION</p>
                    <p className='text-black '>Efficiently re-engineer pandemic processes vis-a-vis bricks-and-clicks partnerships. Proactively coordinate fully researched relationships rather than.</p>
                </div>
                <div className='w-1/3 text-end '>
                    <div className='flex justify-end'>
                        <Image src="/icono-valores.png" height={100} width={100} alt="logo"  className=""/>                    
                    </div>
                    <p className='text-amarillo text-2xl font-semibold mt-5 mb-3'>VISION</p>
                    <p className='text-black'>Efficiently re-engineer pandemic processes vis-a-vis bricks-and-clicks partnerships. Proactively coordinate fully researched relationships rather than.</p>
                </div>
            </div>
        </div>
    </>
  )
}

function NosotrosLogged(props) {
    const {isLogin, setIsLogin} = props
    const [active, setActive] = useState(null)
    
    
    function SampleNextArrow(props) {
  const {  style, onClick } = props;
  return (
    <div
      
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const {  style, onClick } = props;

  

  return (
    <div      
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />   
  };

    return (
        <div className='bg-white px-20 py-20'>
            <div>
                <div className='relative pb-3 w-full border-b border-black'>
                    <h2 className='text-gris font-bold text-2xl'>Nuestra Trayectoria</h2>
                    <div className='absolute -bottom-[1px] left-0 h-1 w-[12%] bg-amarillo z-10'></div>
                </div>
                <div className='space-y-5 px-20 py-10'>
                    <p className='text-gris text-center text-xl'><span className='font-bold'>Rodamitre</span> nace en el año 1989 en la Ciudad Autónoma de Buenos Aires y hoy con más de 25 años en el mercado se ha convertido en un referente en la <span className='font-bold'>distribución de autopartes</span>, impulsada desde sus inicios por la búsqueda permanente de la excelencia en el servicio, calidad y el capital humano.</p>
                    <p className='text-gris text-center text-xl'>Nos dedicamos a cubrir las necesidades de las <span className='font-bold'>casas de repuestos automotrices</span> con la venta de todo lo necesario para <span className='italic'>motor, suspensión, embrague, frenos, transmisión, rodamientos y encendido.</span></p>
                    <p className='text-gris text-center text-xl'>Nuestra estrategia comercial se apoya en sólidas bases de conducta que nos han consolidado como una de las opciones más atractivas para Clientes y Proveedores.</p>
                    <p className='text-gris text-center text-xl'>Nuestro objetivo es continuar con el crecimiento constante y sustentable que venimos desarrollando desde hace años, trabajando para ofrecer a nuestros clientes una propuesta superadora a través de diferenciales estratégicos de nuestra organización.</p>
                </div>
            </div>
            <div>
                <div className='relative pb-3 w-full border-b border-black'>
                    <h2 className='text-gris font-bold text-2xl'>Nos caracterizamos por</h2>
                    <div className='absolute -bottom-[1px] left-0 h-1 w-[12%] bg-amarillo z-10'></div>
                </div>
                <div className='py-20 px-40 grid grid-cols-3 gap-10'>
                    <div className='bg-[#D9D9D9] flex items-center justify-between rounded-tl-lg rounded-br-lg drop-shadow-lg py-3 px-5 cursor-pointer'>
                        <MdAvTimer className='text-black text-5xl'/>
                        <p className='text-gris-medio text-xl p-2'>Eficiencia</p>
                        <MdKeyboardArrowRight className='text-white text-5xl'/>
                    </div>
                    <div className='bg-[#D9D9D9] flex items-center justify-between rounded-tl-lg rounded-br-lg drop-shadow-lg py-3 px-5 cursor-pointer'>
                        <HiOutlineLightBulb className='text-black text-5xl'/>
                        <p className='text-gris-medio text-xl p-2'>Conocimiento</p>
                        <MdKeyboardArrowRight className='text-white text-5xl'/>
                    </div>
                    <div className='bg-[#D9D9D9] flex items-center justify-between rounded-tl-lg rounded-br-lg drop-shadow-lg py-3 px-5 cursor-pointer'>
                        <RiCustomerService2Line className='text-black text-5xl'/>
                        <p className='text-gris-medio text-xl p-2'>Servicio</p>
                        <MdKeyboardArrowRight className='text-white text-5xl'/>
                    </div>
                    <div className='bg-[#D9D9D9] flex items-center justify-between rounded-tl-lg rounded-br-lg drop-shadow-lg py-3 px-5 cursor-pointer'>
                        <FaRegHandshake className='text-black text-5xl'/>
                        <p className='text-gris-medio text-xl p-2'>Confianza</p>
                        <MdKeyboardArrowRight className='text-white text-5xl'/>
                    </div>
                    <div className='bg-[#D9D9D9] flex items-center justify-between rounded-tl-lg rounded-br-lg drop-shadow-lg py-3 px-5 cursor-pointer'>
                        <RiTeamLine className='text-black text-5xl'/>
                        <p className='text-gris-medio text-xl p-2'>Responsabilidad</p>
                        <MdKeyboardArrowRight className='text-white text-5xl'/>
                    </div>
                    <div className='bg-[#D9D9D9] flex items-center justify-between rounded-tl-lg rounded-br-lg drop-shadow-lg py-3 px-5 cursor-pointer'>
                        <IoMdSettings className='text-black text-5xl'/>
                        <p className='text-gris-medio text-xl p-2'>Flexibilidad</p>
                        <MdKeyboardArrowRight className='text-white text-5xl'/>
                    </div>
                </div>
            </div>
            <div>
                <div className='relative pb-3 w-full border-b border-black'>
                    <h2 className='text-gris font-bold text-2xl'>Distribuidor Oficial</h2>
                    <div className='absolute -bottom-[1px] left-0 h-1 w-[12%] bg-amarillo z-10'></div>
                </div>
                <div className='py-10'>
                    <Slider {...settings}>
                        <Image src="/logo-timken-2.png" height={88} width={177} alt="logo"  className=" "/>
                        <Image src="/logo-dayco-2.png" height={88} width={177} alt="logo"  className=" "/>
                        <Image src="/logo-frasle-2.png" height={88} width={177} alt="logo"  className=" "/>
                        <Image src="/logo-fremax-2.png" height={88} width={177} alt="logo"  className=" "/>
                        <Image src="/logo-mahle-2.png" height={88} width={177} alt="logo"  className=""/>
                        <Image src="/logo-hescher-2.png" height={88} width={177} alt="logo"  className=""/>
                        <Image src="/logo-peer-2.png" height={88} width={177} alt="logo"  className=""/>
                        <Image src="/logo-cofap-2.png" height={88} width={177} alt="logo"  className=""/> 
                    </Slider>
                </div>
            </div>
            <div >
                <div className='relative pb-3 w-full border-b border-black'>
                    <h2 className='text-gris font-bold text-2xl'>Conocé Nuestros Productos</h2>
                    <div className='absolute -bottom-[1px] left-0 h-1 w-[12%] bg-amarillo z-10'></div>
                </div>
                <div className='pt-10 pb-20 flex justify-between items-center'>
                    <div onClick={() => setActive("MOTOR")} className='flex flex-col items-center justify-center'>
                        <Image src="/icono-motor.png" height={175} width={175} alt="logo"  className="mb-5"/>
                        <p className='text-gris text-2xl'>MOTOR</p>
                    </div>
                    <div onClick={() => setActive("SUSPENSION")} className='flex flex-col items-center justify-center'>
                        <Image src="/icono-suspension.png" height={175} width={175} alt="logo"  className="mb-5"/>
                        <p className='text-gris text-2xl'>SUSPENSION</p>
                    </div>
                    <div onClick={() => setActive("ENCENDIDO")} className='flex flex-col items-center justify-center'>
                        <Image src="/icono-encendido.png" height={175} width={175} alt="logo"  className="mb-5"/>
                        <p className='text-gris text-2xl'>ENCENDIDO</p>
                    </div>
                    <div onClick={() => setActive("FRENOS")} className='flex flex-col items-center justify-center'>
                        <Image src="/icono-freno.png" height={175} width={175} alt="logo"  className="mb-5"/>
                        <p className='text-gris text-2xl'>FRENOS Y EMBRAGUE</p>
                    </div>
                    <div onClick={() => setActive("RODAMIENTOS")} className='flex flex-col items-center justify-center'>
                        <Image src="/icono-rodamiento.png" height={175} width={175} alt="logo"  className="mb-5"/>
                        <p className='text-gris text-2xl'>RODAMIENTOS</p>
                    </div>
                    <div onClick={() => setActive("TRANSMISION")} className='flex flex-col items-center justify-center'>
                        <Image src="/icono-transmision.png" height={175} width={175} alt="logo"  className="mb-5"/>
                        <p className='text-gris text-2xl'>TRANSMISION</p>
                    </div>
                </div>
               {active === null ? null : 
               <div className='px-20'>
                <div className='bg-[#F1F1F1] rounded-lg grid grid-cols-3 px-10 py-5 gap-10'>
                        {active === "MOTOR" && <>
                        <div>
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Kit de distribución</p>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Bombas auxiliares</p>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Correas Trapezoidales</p>
                            </div>
                        </div>
                        <div >
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Tensores y poleas</p>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Correas de distribución</p>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Kits Poli V</p>
                            </div>
                        </div>
                        <div >
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Bombas de agua</p>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Correas poli v</p>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Líquidos refrigerantes</p>
                            </div>
                        </div>
                        </>}
                        {active === "SUSPENSION" && <>
                        <div >
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Amortiguador</p>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Parrillas</p>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Axiales</p>
                            </div>
                        </div>
                        <div >
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Bieletas</p>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Rótulas</p>
                            </div>
                        </div>
                        <div >
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Extremos de dirección</p>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Brazo</p>
                            </div>                        
                        </div>
                        </>}
                        {active === "ENCENDIDO" && <>
                        <div >
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Bujías Incandescentes</p>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Bobinas de combustible eléctricas</p>
                            </div>
                        </div>
                        <div >
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Bujía de encendido</p>
                            </div>
                        </div>
                        <div >
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Bobina de ignición</p>
                            </div>                       
                        </div>
                        </>}
                        {active === "FRENOS" && <>
                        <div>
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Discos y campanas</p>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Bloques de freno</p>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Crapodinas mecánicas</p>
                            </div>
                        </div>
                        <div >
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Pastillas de freno</p>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Líquidos de frenos</p>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Actuadores y componentes hidraulicos</p>
                            </div>
                        </div>
                        <div >
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Cintas de freno</p>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Embragues</p>
                            </div>
                        </div>
                        </>}
                        {active === "RODAMIENTOS" && <>
                        <div>
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Rodamientos de rueda</p>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Rodamientos agrícolas</p>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Retenes</p>
                            </div>
                        </div>
                        <div >
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Mazas de ruedas</p>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Rodamientos de aplicación general</p>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Soportes</p>
                            </div>
                        </div>
                        <div >
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Rodamientos de suspensión</p>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Rodamientos industriales</p>
                            </div>
                        </div>
                        </>}
                        {active === "TRANSMISION" && <>
                        <div>
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Soportes de cardan</p>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Tricetas</p>
                            </div>
                        </div>
                        <div >
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Cadenas agrícolas</p>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Homocineticas</p>
                            </div>
                        </div>
                        <div >
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Crucetas</p>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <GoDotFill className='text-amarillo text-lg'/>
                                <p className='text-gris text-2xl'>Semiejes</p>
                            </div>
                        </div>
                        </>}
                    </div>
                </div>
                }
            </div>
        </div>
    )
} 