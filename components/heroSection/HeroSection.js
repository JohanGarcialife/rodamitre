import React from "react";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import BuscadorFamilia from "../buscadores/BuscadorFamilia";
import BuscadorVehiculo from "../buscadores/BuscadorVehiculo";
import BuscadorRapida from "../buscadores/BuscadorRapida";

export default function HeroSection(props) {
  const { isLogin, setIsLogin, buscador } = props;

  return (
    <div className="bg-[url('/chicago-690365-lq.jpg')] bg-cover relative min-h-screen overflow-hidden">
      {isLogin === false && (
        <>
          <div className="px-12 py-24">
            <div className="mt-20 flex">
              <div className="mr-10 w-2/5 mt-5">
                <h1 className="text-3xl tracking-wide mb-5 text-white font-body">
                  <span className="font-semibold">Más de 25 años</span> en la
                  distribución de Autopartes
                </h1>
                <div className="text-white flex w-full items-center space-x-4 border-b border-dotted	border-white py-3">
                  <FaCheck />
                  <p>Servicio</p>
                </div>
                <div className="text-white flex w-full items-center space-x-4 border-b border-dotted	border-white py-3">
                  <FaCheck />
                  <p>Confianza</p>
                </div>
                <div className="text-white flex w-full items-center space-x-4 border-b border-dotted	border-white py-3">
                  <FaCheck />
                  <p>Eficiencia</p>
                </div>
                <div className="text-white flex w-full items-center space-x-4 border-b border-dotted	border-white py-3">
                  <FaCheck />
                  <p>Flexibilidad</p>
                </div>
                <div className="text-white flex w-full items-center space-x-4 border-b border-dotted	border-white py-3">
                  <FaCheck />
                  <p>Conocimiento</p>
                </div>
                <div className="text-white flex w-full items-center space-x-4 border-b border-dotted	border-white py-3">
                  <FaCheck />
                  <p>Responsabilidad</p>
                </div>
              </div>

              <div className="bg-white/25 p-8 w-2/5 h-fit">
                <div className="flex justify-center text-center mb-5 px-10">
                  <p className="text-white font-bold text-3xl">
                    Ingresa a nuestro Catálogo
                  </p>
                </div>
                <div className="flex items justify-between">
                  <div className="mt-2 space-y-6 w-1/3 ">
                    <p className="text-white">Usuario</p>
                    <p className="text-white">Contraseña</p>
                  </div>

                  <div className="space-y-6 w-2/3">
                    <input
                      className="pl-3 py-1 w-full rounded-md"
                      type="text"
                      placeholder="Username"
                    />
                    <input
                      className="pl-3 py-1 w-full rounded-md"
                      type="text"
                      placeholder="Your password"
                    />

                    <button
                      onClick={() => setIsLogin(!isLogin)}
                      className="px-4 py-2 bg-amarillo text-white rounded-sm hover:bg-azul"
                    >
                      INGRESAR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0">
            <div className="flex items-center justify-center">
              <img src="./mask.svg" className="scale-375 z-40" />
              <IoIosArrowDown className="absolute -bottom-0 max-w-screen  scale-150 text-gris z-50" />
            </div>
          </div>
        </>
      )}
      {isLogin === true && (
        <div className="px-12 pt-52 pb-24">
          {buscador === "Familia" && <BuscadorFamilia />}
          {buscador === "Vehiculo" && <BuscadorVehiculo />}
          {buscador === "Rapida" && <BuscadorRapida />}
        </div>
      )}
    </div>
  );
}
