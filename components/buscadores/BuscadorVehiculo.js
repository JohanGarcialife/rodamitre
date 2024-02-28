import React, { useState } from "react";
import Image from "next/image";
import { AiFillInfoCircle } from "react-icons/ai";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import styled from "@emotion/styled";
import { FaCircle } from "react-icons/fa";

export default function BuscadorVehiculo() {
  const [vehiculo, setVehiculo] = useState(null);
  const [modelo, setModelo] = useState(null);
  const [rubro, setRubro] = useState(null);
  const [motor, setMotor] = useState(null);
  const [cantidad, setCantidad] = useState(0);
  const [cantidad2, setCantidad2] = useState(0);
  const [cantidad3, setCantidad3] = useState(0);

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

  function handleChangeCantidad(event) {
    setCantidad(event.target.value);
  }

  function handleChangeCantidad2(event) {
    setCantidad2(event.target.value);
  }

  function handleChangeCantidad3(event) {
    setCantidad3(event.target.value);
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
          <p className="text-[#969696] font-bold text-xs uppercase ">
            Vehículo
          </p>
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
          <p className="text-[#969696] font-bold text-xs uppercase ">Modelo</p>
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
          <p className="text-[#969696] font-bold text-xs uppercase ">Rubro</p>
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
          <p className="text-[#969696] font-bold text-xs uppercase ">Motor</p>
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
      <div className="flex items-center justify-end mt-5">
        <div className="flex items-center space-x-4 bg-white rounded-lg p-3  w-fit">
          <div className="flex items-center space-x-2">
            <FaCircle className="text-green-600" />
            <p className="text-black">Stock</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaCircle className="text-red-600" />
            <p className="text-black">Sin Stock</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaCircle className="text-[#EFBE5E]" />
            <p className="text-black">Consultar Stock</p>
          </div>
        </div>
      </div>
      <div className=" flex justify-center mt-5 font-montserrat">
        <Table>
          <TableHead className="text-black rounded-t-lg p-5 w-full uppercase">
            <TableRow className=" bg-amarillo flex justify-between !rounded-t-lg items-center">
              <TableCell>
                <div className="font-bold text-black flex justify-center">
                  ARTÍCULO
                </div>
              </TableCell>
              <TableCell>
                <div className="font-bold text-black flex justify-center">
                  MOTORIZACIÓN
                </div>
              </TableCell>
              <TableCell>
                <div className="font-bold text-black flex justify-center">
                  MARCA
                </div>
              </TableCell>
              <TableCell>
                <div className="font-bold text-black flex justify-center">
                  COSTO
                </div>
              </TableCell>
              <TableCell>
                <div className="font-bold text-black flex justify-center">
                  VENTA
                </div>
              </TableCell>
              <TableCell>
                <div className="font-bold text-black flex justify-center">
                  CANTIDAD
                </div>
              </TableCell>
              <TableCell>{""}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="bg-white">
            <TableRowStyled className="w-full">
              <TableCell colSpan={7}>
                <div className="border-b border-black text-center w-full flex justify-center">
                  <p className="text-3xl text-black font-bold border-b-4 border-amarillo w-fit px-4">
                    Rubro
                  </p>
                </div>
              </TableCell>
            </TableRowStyled>

            <TableRowStyled className="text-black p-5 flex justify-between w-full last-of-type:rounded-b-lg items-center">
              <TableCell className="w-full text-center">
                <div className="font-bold flex items-center space-x-3">
                  <Image
                    src="/VKPC-85097_1_SKF.jpg"
                    height={75}
                    width={75}
                    alt="Imagen"
                    className="mr-3"
                  />
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
                <div className="font-black">
                  <p>1.6 16v</p>
                </div>
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="font-bold text-green-600">
                  <p>SFK</p>
                </div>
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="font-bold text-green-600">
                  <p>$ 9.668,68</p>
                </div>
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="font-bold text-green-600">
                  <p>$ 9.668,68</p>
                </div>
              </TableCell>
              <TableCell className="w-full flex justify-center">
                <div className="w-full flex justify-center">
                  <div className="w-full ">
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
                <div className="py-1 px-2 bg-amarillo text-azul rounded-sm cursor-pointer font-bold">
                  <p>Pedir</p>
                </div>
              </TableCell>
            </TableRowStyled>
            <TableRowStyled className="text-black p-5 flex justify-between w-full last-of-type:rounded-b-lg items-center">
              <TableCell className="w-full text-center">
                <div className="font-bold flex items-center space-x-3">
                  <Image
                    src="/VKPC-85097_1_SKF.jpg"
                    height={75}
                    width={75}
                    alt="Imagen"
                    className="mr-3"
                  />
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
                <div className="font-black">
                  <p>1.6 16v</p>
                </div>
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="font-bold text-red-600">
                  <p>SFK</p>
                </div>
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="font-bold text-red-600">
                  <p>$ 9.668,68</p>
                </div>
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="font-bold text-red-600">
                  <p>$ 9.668,68</p>
                </div>
              </TableCell>
              <TableCell className="w-full flex justify-center">
                <div className="w-full flex justify-center">
                  <div className="w-full ">
                    <input
                      type="number"
                      min="0"
                      max="1000"
                      value={cantidad2}
                      onChange={handleChangeCantidad2}
                      className="px-2 w-2/4 rounded-md border border-black "
                    />
                  </div>
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
                  <Image
                    src="/VKPC-85097_1_SKF.jpg"
                    height={75}
                    width={75}
                    alt="Imagen"
                    className="mr-3"
                  />
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
                <div className="font-black">
                  <p>1.6 16v</p>
                </div>
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="font-bold text-[#EFBE5E]">
                  <p>SFK</p>
                </div>
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="font-bold text-[#EFBE5E]">
                  <p>$ 9.668,68</p>
                </div>
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="font-bold text-[#EFBE5E]">
                  <p>$ 9.668,68</p>
                </div>
              </TableCell>
              <TableCell className="w-full flex justify-center">
                <div className="w-full flex justify-center">
                  <div className="w-full ">
                    <input
                      type="number"
                      min="0"
                      max="1000"
                      value={cantidad3}
                      onChange={handleChangeCantidad3}
                      className="px-2 w-2/4 rounded-md border border-black "
                    />
                  </div>
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
