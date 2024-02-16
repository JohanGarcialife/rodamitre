import React, { useEffect, useState } from "react";
import Image from "next/image";
import Topbar from "./topbar/Topbar";
import Menu from "./menu/Menu";
import { IoIosArrowDown } from "react-icons/io";

export default function Header(props) {
  const {
    show,
    setShow,
    handleOpen,
    handleClose,
    isLogin,
    setIsLogin,
    setBuscador,
    buscador,
  } = props;
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
      {isLogin === false ? (
        <>
          {scrolled === false ? (
            <div className="absolute top-0 w-full z-50">
              <div className="px-12">
                <Topbar
                  show={show}
                  setShow={setShow}
                  handleOpen={handleOpen}
                  handleClose={handleClose}
                  isLogin={isLogin}
                  setIsLogin={setIsLogin}
                />
                <Menu />
              </div>
            </div>
          ) : (
            <div className="fixed bg-azul/75 top-0 w-full z-50">
              <div className="px-12">
                <Topbar
                  show={show}
                  setShow={setShow}
                  handleOpen={handleOpen}
                  handleClose={handleClose}
                  isLogin={isLogin}
                  setIsLogin={setIsLogin}
                />
                <Menu />
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="absolute top-0 w-full z-50 bg-azul/50">
          <div className="px-12">
            <Topbar
              show={show}
              setShow={setShow}
              handleOpen={handleOpen}
              handleClose={handleClose}
              isLogin={isLogin}
              setIsLogin={setIsLogin}
            />
          </div>
          <div className="flex items-end pb-3 justify-between px-12">
            <Image
              src="/rodamitre-logo.png"
              height={150}
              width={300}
              alt="Roadmitre logo"
              className="h-fit"
            />
            <div className="pb-3">
              <div className="py-3 mb-3 border-b border-white w-full">
                <p className="text-white text-2xl  text-center">Búsquedas</p>
                {/* <input type='text ' className='bg-transparent' /> */}
              </div>
              <div className="flex items-center space-x-5">
                <p
                  onClick={() => setBuscador("Familia")}
                  className={
                    buscador === "Familia"
                      ? "text-white text-lg text-center cursor-pointer border-b-2 border-amarillo"
                      : "text-white text-lg text-center cursor-pointer"
                  }
                >
                  Familia
                </p>
                <p
                  onClick={() => setBuscador("Vehiculo")}
                  className={
                    buscador === "Vehiculo"
                      ? "text-white text-lg text-center cursor-pointer border-b-2 border-amarillo"
                      : "text-white text-lg text-center cursor-pointer"
                  }
                >
                  Vehículo
                </p>
                <p
                  onClick={() => setBuscador("Rapida")}
                  className={
                    buscador === "Rapida"
                      ? "text-white text-lg text-center cursor-pointer border-b-2 border-amarillo"
                      : "text-white text-lg text-center cursor-pointer"
                  }
                >
                  Rápida
                </p>
              </div>
            </div>
            <div className="flex items-center pb-3 text-lg space-x-5">
              <div className="flex items-center  space-x-1 cursor-pointer">
                <p className="text-white  text-center">Ofertas</p>
                <IoIosArrowDown className="text-white text-center" />
              </div>

              <div className="flex items-center  space-x-1 cursor-pointer">
                <p className="text-white  text-center">Reclamos</p>
                <IoIosArrowDown className="text-white text-center" />
              </div>
              <div className="flex items-center  space-x-1 cursor-pointer">
                <p className="text-white   text-center">Administración</p>
                <IoIosArrowDown className="text-white text-center" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
