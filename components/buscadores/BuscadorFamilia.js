import React, { useState } from "react";
import Image from "next/image";
import { AiFillInfoCircle } from "react-icons/ai";
import { CiCircleInfo } from "react-icons/ci";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import styled from "@emotion/styled";

export default function BuscadorFamilia() {
  const [vehiculo, setVehiculo] = useState(null);
  const [marca, setMarca] = useState(null);
  const [familia, setFamilia] = useState(null);
  const [rubro, setRubro] = useState(null);
  const [cantidad, setCantidad] = useState(0);
  const [cantidad2, setCantidad2] = useState(0);

  function handleSelectVehiculo(event) {
    setVehiculo(event.target.value);
  }

  function handleSelectMarca(event) {
    setMarca(event.target.value);
  }

  function handleSelectFamilia(event) {
    setFamilia(event.target.value);
  }

  function handleSelectRubro(event) {
    setRubro(event.target.value);
  }

  function handleChangeCantidad(event) {
    setCantidad(event.target.value);
  }

  function handleChangeCantidad2(event) {
    setCantidad2(event.target.value);
  }

  const TableRowStyled = styled(TableRow)`
    &:nth-of-type(odd) {
      background-color: #d7d7ff;
    }
    &:nth-of-type(even) {
      background-color: #f5f5f5;
    }
    & td,
    th {
      width: fit-content;
      text-align: center;
    }
  `;

  return (
    <>
      <div className="flex space-x-5 font-montserrat">
        <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
          <p className="text-[#969696] font-bold text-xs uppercase">Vehículo</p>
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
          <p className="text-[#969696] font-bold text-xs uppercase ">Familia</p>
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
          <p className="text-[#969696] font-bold text-xs uppercase ">Marca</p>
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
          <p className="text-[#969696] font-bold text-xs uppercase ">Rubro</p>
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
      <div className=" flex justify-center font-montserrat mt-5 rounded-lg">
        <Table>
          <TableHead className="text-black rounded-t-lg p-5 w-full uppercase">
            <TableRow className=" bg-amarillo flex justify-between !rounded-t-lg items-center">
              <TableCell>
                <div className="font-bold text-black flex justify-center">
                  Artículo
                </div>
              </TableCell>
              <TableCell>
                <div className="font-bold text-black flex justify-center">
                  Aplicaciones
                </div>
              </TableCell>
              <TableCell>
                <div className="font-bold text-black flex justify-center">
                  Marca
                </div>
              </TableCell>
              <TableCell>
                <div className="font-bold text-black flex justify-center">
                  Stock
                </div>
              </TableCell>
              <TableCell>
                <div className="font-bold text-black flex justify-center">
                  Costo
                </div>
              </TableCell>
              <TableCell>
                <div className="font-bold text-black flex justify-center">
                  Cantidad
                </div>
              </TableCell>
              <TableCell>
                <div className="font-bold text-black flex justify-center">
                  SUB-TOTAL
                </div>
              </TableCell>
              <TableCell>{""}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="bg-white">
            <TableRowStyled className="text-black p-5 flex justify-between w-full last-of-type:rounded-b-lg items-center">
              <TableCell className="w-full text-center">
                <div className="font-bold flex items-center space-x-3">
                  <div className="group">
                    {" "}
                    <AiFillInfoCircle />
                    <div className="absolute z-30 hidden group-hover:block bg-white text-black p-3 rounded-md border border-gris space-y-3">
                      <div className="grid grid-cols-3 space-x-3">
                        <div className="space-y-3">
                          <div className="bg-amarillo w-full px-10 py-1 ">
                            <p className="text-azul font-bold">Interior</p>
                          </div>
                          <p>20</p>
                        </div>
                        <div className="space-y-3">
                          <div className="bg-amarillo w-full px-10 py-1">
                            <p className="text-azul font-bold">Exterior</p>
                          </div>
                          <p>20</p>
                        </div>
                        <div className="space-y-3">
                          <div className="bg-amarillo w-full px-10 py-1">
                            <p className="text-azul font-bold">Altura</p>
                          </div>
                          <p>20</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-amarillo w-full py-1">
                          <p className="text-azul font-bold">Notas</p>
                        </div>
                        <p>Notas</p>
                      </div>
                    </div>
                  </div>
                  <p>VKPC 85097</p>
                </div>
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="text-gris text-xs flex items-center space-x-2 justify-center">
                  <p>Varias Varios (...)</p>
                  <div className="group">
                    {" "}
                    <div className="absolute z-30 hidden group-hover:block bg-white text-black p-3 rounded-md border border-gris space-y-3">
                      <p className="font-bold text-black text-base">
                        Aplicaciones
                      </p>
                      <p className="font-bold text-black text-base">
                        Aplicaciones
                      </p>
                      <p className="font-bold text-black text-base">
                        Aplicaciones
                      </p>
                    </div>
                    <CiCircleInfo className="font-bold text-lg" />
                  </div>
                </div>
                {/* <div className="text-gris text-xs flex space-x-2 justify-center items-center cursor-pointer">
                  <p>SEAT IBIZA</p>
                  <AiOutlineExclamationCircle />
                </div> */}
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="flex space-x-4 items-center font-bold">
                  <Image
                    src="/VKPC-85097_1_SKF.jpg"
                    height={75}
                    width={75}
                    alt="Imagen"
                    className="mr-3"
                  />
                  <p>SKF</p>
                </div>
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="font-bold text-green-600">
                  <p>Disponible</p>
                </div>
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="font-bold">$ 86.859,62</div>
              </TableCell>
              <TableCell className="w-full flex justify-center">
                <div className="w-full flex justify-center">
                  <div className="w-2/4 ">
                    <input
                      type="number"
                      min="0"
                      max="1000"
                      value={cantidad}
                      onChange={handleChangeCantidad}
                      className="px-2 w-2/4 rounded-md border border-black "
                    />
                  </div>
                </div>
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="font-bold ">
                  $ {(86859.62 * cantidad).toFixed(2)}
                </div>
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="py-1 px-2 bg-amarillo text-azul rounded-sm cursor-pointer font-bold">
                  <p>Pedir</p>
                </div>
              </TableCell>
            </TableRowStyled>
            <TableRowStyled className="text-black p-5 flex justify-between w-full last-of-type:rounded-b-lg items-center">
              <TableCell className="w-full text-center">
                <div className="font-bold flex items-center space-x-3">
                  <div className="group">
                    {" "}
                    <AiFillInfoCircle />
                    <div className="absolute z-30 hidden group-hover:block bg-white text-black p-3 rounded-md border border-gris space-y-3">
                      <div className="grid grid-cols-3 space-x-3">
                        <div className="space-y-3">
                          <div className="bg-amarillo w-full px-10 py-1 ">
                            <p className="text-azul font-bold">Interior</p>
                          </div>
                          <p>20</p>
                        </div>
                        <div className="space-y-3">
                          <div className="bg-amarillo w-full px-10 py-1">
                            <p className="text-azul font-bold">Exterior</p>
                          </div>
                          <p>20</p>
                        </div>
                        <div className="space-y-3">
                          <div className="bg-amarillo w-full px-10 py-1">
                            <p className="text-azul font-bold">Altura</p>
                          </div>
                          <p>20</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-amarillo w-full py-1">
                          <p className="text-azul font-bold">Notas</p>
                        </div>
                        <p>Notas</p>
                      </div>
                    </div>
                  </div>
                  <p>VKPC 85097</p>
                </div>
              </TableCell>
              <TableCell className="w-full text-center space-y-1">
                <div className="text-gris text-xs flex items-center space-x-2 justify-center">
                  <p>SEAT IBIZA</p>
                  <div className="group">
                    {" "}
                    <div className="absolute z-30 hidden group-hover:block bg-white text-black p-3 rounded-md border border-gris space-y-3">
                      <p className="font-bold text-black text-base">
                        Aplicaciones
                      </p>
                      <p className="font-bold text-black text-base">
                        Aplicaciones
                      </p>
                      <p className="font-bold text-black text-base">
                        Aplicaciones
                      </p>
                    </div>
                    <CiCircleInfo className="font-bold text-lg" />
                  </div>
                </div>
                <div className="text-gris text-xs flex items-center space-x-2 justify-center">
                  <p>SEAT INCA</p>
                  <div className="group">
                    {" "}
                    <div className="absolute z-30 hidden group-hover:block bg-white text-black p-3 rounded-md border border-gris space-y-3">
                      <p className="font-bold text-black text-base">
                        Aplicaciones
                      </p>
                      <p className="font-bold text-black text-base">
                        Aplicaciones
                      </p>
                      <p className="font-bold text-black text-base">
                        Aplicaciones
                      </p>
                    </div>
                    <CiCircleInfo className="font-bold text-lg" />
                  </div>
                </div>
                <div className="text-gris text-xs flex items-center space-x-2 justify-center">
                  <p>VW CROSSFOX</p>
                  <div className="group">
                    {" "}
                    <div className="absolute z-30 hidden group-hover:block bg-white text-black p-3 rounded-md border border-gris space-y-3">
                      <p className="font-bold text-black text-base">
                        Aplicaciones
                      </p>
                      <p className="font-bold text-black text-base">
                        Aplicaciones
                      </p>
                      <p className="font-bold text-black text-base">
                        Aplicaciones
                      </p>
                    </div>
                    <CiCircleInfo className="font-bold text-lg" />
                  </div>
                </div>
                <div className="text-gris text-xs flex items-center space-x-2 justify-center">
                  <p>VW FOX</p>
                  <div className="group">
                    {" "}
                    <div className="absolute z-30 hidden group-hover:block bg-white text-black p-3 rounded-md border border-gris space-y-3">
                      <p className="font-bold text-black text-base">
                        Aplicaciones
                      </p>
                      <p className="font-bold text-black text-base">
                        Aplicaciones
                      </p>
                      <p className="font-bold text-black text-base">
                        Aplicaciones
                      </p>
                    </div>
                    <CiCircleInfo className="font-bold text-lg" />
                  </div>
                </div>
                {/* <div className="text-gris text-xs flex space-x-2 justify-center items-center cursor-pointer">
                  <p>SEAT IBIZA</p>
                  <AiOutlineExclamationCircle />
                </div> */}
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="flex space-x-4 items-center font-bold">
                  <Image
                    src="/VKPC-85097_1_SKF.jpg"
                    height={75}
                    width={75}
                    alt="Imagen"
                    className="mr-3"
                  />
                  <p>SKF</p>
                </div>
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="font-bold text-red-600">
                  <p>Sin Stock</p>
                </div>
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="font-bold">$ 86.859,62</div>
              </TableCell>
              <TableCell className="w-full flex justify-center">
                <div className="w-full flex justify-center">
                  <div className="w-2/4 ">
                    <input
                      type="number"
                      min="0"
                      value={cantidad2}
                      onChange={handleChangeCantidad2}
                      className="px-2 w-2/4 rounded-md border border-black "
                    />
                  </div>
                </div>
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="font-bold ">
                  $ {(86859.62 * cantidad2).toFixed(2)}
                </div>
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="py-1 px-2 bg-amarillo text-azul rounded-sm cursor-pointer font-bold">
                  <p>Pedir</p>
                </div>
              </TableCell>
            </TableRowStyled>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
