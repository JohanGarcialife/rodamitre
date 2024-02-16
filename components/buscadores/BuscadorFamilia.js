import React, { useState } from "react";
import Image from "next/image";

export default function BuscadorFamilia() {
  const [vehiculo, setVehiculo] = useState(null);
  const [marca, setMarca] = useState(null);
  const [rubro, setRubro] = useState(null);
  const [familia, setFamilia] = useState(null);

  function handleSelectVehiculo(event) {
    setVehiculo(event.target.value);
  }

  function handleSelectMarca(event) {
    setMarca(event.target.value);
  }

  function handleSelectRubro(event) {
    setRubro(event.target.value);
  }

  function handleSelectFamilia(event) {
    setFamilia(event.target.value);
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
          <p className="text-[#969696] font-bold text-sm ">Familia</p>
          <select
            className="pl-4 w-full text-black"
            label={familia}
            value={familia}
            onChange={handleSelectFamilia}
          >
            <option value="Bobinas-de-ignicion">Bobinas de ignición</option>
            <option value="Bombas-de-agua">Bombas de agua</option>
            <option value="Bombas-de-combustible">Bombas de combustible</option>
            <option value="Filtros">Filtros</option>
          </select>
        </div>
        <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
          <p className="text-[#969696] font-bold text-sm ">Marca</p>
          <select
            className="pl-4 w-full text-black"
            label={marca}
            value={marca}
            onChange={handleSelectMarca}
          >
            <option value="Chevrolet">Hescher</option>
            <option value="Citroen">Mahler</option>
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
            <option value="Bobinas-de-ignicion">Bobinas de ignición</option>
          </select>
        </div>
      </div>
      <div className=" flex justify-center ">
        <table className="w-full mt-5  ">
          <thead className="bg-amarillo text-black rounded-t-lg p-5 flex justify-between w-full ">
            <td className="w-full text-center font-bold ">Artículo</td>
            <td className="w-full text-center font-bold ">Marca</td>
            <td className="w-full text-center font-bold ">Costo</td>
            <td className="w-full text-center font-bold ">Pedir</td>
            <td className="w-full text-center font-bold ">Subtotal</td>
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
              <td className="w-full text-center">
                <input
                  type="text"
                  className="px-3 w-1/4 rounded-md border border-black "
                />
              </td>
              <td className="w-full text-center">$ 0.00</td>
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
              <td className="w-full text-center">
                <input
                  type="text"
                  className="px-3 w-1/4 rounded-md border border-black"
                />
              </td>
              <td className="w-full text-center">$ 0.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
