import React, { useState } from "react";
import Image from "next/image";

export default function BuscadorVehiculo() {
  const [vehiculo, setVehiculo] = useState(null);
  const [modelo, setModelo] = useState(null);
  const [rubro, setRubro] = useState(null);
  const [motor, setMotor] = useState(null);

  function handleSelectVehiculo(event) {
    setVehiculo(event.target.value);
  }

  function handleSelectModelo(event) {
    setModelo(event.target.value);
  }

  function handleSelectRubro(event) {
    setRubro(event.target.value);
  }

  function handleSelectMotor(event) {
    setMotor(event.target.value);
  }

  return (
    <>
      <div className="flex space-x-5">
        <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
          <p className="text-[#969696] font-bold text-sm ">Vehículo</p>
          <select
            className="pl-4 w-full text-black"
            label={vehiculo}
            value={vehiculo}
            onChange={handleSelectVehiculo}
          >
            <option value="Chevrolet">Chevrolet</option>
            <option value="Citroen">Citroen</option>
            <option value="Fiat">Fiat</option>
            <option value="Ford">Ford</option>
          </select>
        </div>
        <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
          <p className="text-[#969696] font-bold text-sm ">Modelo</p>
          <select
            className="pl-4 w-full text-black"
            label={modelo}
            value={modelo}
            onChange={handleSelectModelo}
          >
            <option value="400">400</option>
            <option value="Agile">Agile</option>
            <option value="Astra">Astra</option>
            <option value="Avalanche">Avalanche</option>
          </select>
        </div>
        <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
          <p className="text-[#969696] font-bold text-sm ">Rubro</p>
          <select
            className="pl-4 w-full text-black"
            label={rubro}
            value={rubro}
            onChange={handleSelectRubro}
          >
            <option value="Bomba-de-Agua">Bomba de Agua</option>
            <option value="Cinta-de-freno">Cinta de freno</option>
            <option value="Cruceta">Cruceta</option>
            <option value="Pastilla-de-freno">Pastilla de freno</option>
          </select>
        </div>
        <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
          <p className="text-[#969696] font-bold text-sm ">Motor</p>
          <select
            className="pl-4 w-full text-black"
            label={motor}
            value={motor}
            onChange={handleSelectMotor}
          >
            <option value="todos">Todos</option>
          </select>
        </div>
      </div>
      <div className=" flex justify-center ">
        <table className="w-full mt-5  ">
          <thead className="bg-amarillo text-black rounded-t-lg p-5 flex justify-between w-full ">
            <td className="w-full text-center font-bold ">Artículo</td>
            <td className="w-full text-center font-bold ">Marca</td>
            <td className="w-full text-center font-bold ">Costo</td>
            <td className="w-full text-center font-bold ">Venta</td>
            <td className="w-full text-center font-bold ">Pedir</td>
          </thead>
          <tbody>
            <tr className="bg-[#FFEEDC] text-black p-5 flex justify-between w-full last-of-type:rounded-b-lg items-center">
              <td className="w-full text-center">VKPC 85097</td>
              <td className="w-full text-center font-bold flex items-center justify-center">
                <Image
                  src="/VKPC-85097_1_SKF.jpg"
                  height={75}
                  width={75}
                  alt="Imagen"
                  className="mr-3"
                />
                SKF
              </td>
              <td className="w-full text-center">$ 86.859,62</td>
              <td className="w-full text-center">210.200,28</td>
              <td className="w-full text-center">
                <input
                  type="text"
                  className="px-3 w-1/4 rounded-md border border-black "
                />
              </td>
            </tr>
            <tr className="bg-[#FFEEDC] text-black p-5 flex justify-between w-full last-of-type:rounded-b-lg items-center">
              <td className="w-full text-center">VKPC 85097</td>
              <td className="w-full text-center font-bold flex items-center justify-center">
                <Image
                  src="/VKPC-85097_VMG.jpg"
                  height={75}
                  width={75}
                  alt="Imagen"
                  className="mr-3"
                />
                VMG [BA 007]
              </td>
              <td className="w-full text-center">$ 57.967,96</td>
              <td className="w-full text-center">140.282,45</td>
              <td className="w-full text-center">
                <input
                  type="text"
                  className="px-3 w-1/4 rounded-md border border-black"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
