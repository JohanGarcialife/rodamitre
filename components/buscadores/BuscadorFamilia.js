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
  Breadcrumbs,
  Link,
} from "@mui/material";

import styled from "@emotion/styled";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import Select from "react-select";

const vehiculos = [
  { value: "Chevrolet", label: "Chevrolet" },
  { value: "Toyota", label: "Toyota" },
  { value: "Fiat", label: "Fiat" },
  { value: "Citroen", label: "Citroen" },
  { value: "Nissan", label: "Nissan" },
  { value: "Ford", label: "Fordd" },
];

const marcas = [
  { value: "SFK", label: "SFK" },
  { value: "AYS", label: "AYS" },
  { value: "COFAP", label: "COFAP" },
  { value: "BTP", label: "BTP" },
  { value: "DAYCO", label: "DAYCO" },
  { value: "DEXCO", label: "DEXCO" },
  { value: "FAG", label: "FAG" },
];

const familias = [
  { value: "Bombas-de-agua", label: "Bombas de agua" },
  { value: "Bobinas-de-ignicion", label: "Bobinas de ignición" },
  { value: "Bujias", label: "Bujías" },
  { value: "Bombas-de-combustible", label: "Bombas de combustible" },
];

const rubros = [
  { value: "Bomba-de-agua", label: "Bombas de agua" },
  { value: "Bobinas-de-ignicion", label: "Bobinas de ignición" },
  { value: "Bombas-auxiliar-electrica", label: "Bombas auxiliar eléctrica" },
];

export default function BuscadorFamilia() {
  const [marca, setMarca] = useState([]);
  const [familia, setFamilia] = useState(null);
  const [rubro, setRubro] = useState(null);
  const [quantities, setQuantities] = useState({});
  const [cantidad, setCantidad] = useState(0);
  const [cantidad2, setCantidad2] = useState(0);
  const [cantidad3, setCantidad3] = useState(0);
  const [vehiculoName, setVehiculoName] = useState([]);

  const handleQuantityChange = (productId, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
  };

  function handleCantidad(event) {
    setCantidad(event.target.value);
  }

  function handleCantidad2(event) {
    setCantidad2(event.target.value);
  }

  function handleCantidad3(event) {
    setCantidad3(event.target.value);
  }

  const handleChangeVehiculo = (event) => {
    setVehiculoName(event);
    setFamilia(null);
    setMarca([]);
    setRubro(null);
  };

  function handleSelectFamilia(event) {
    setFamilia(event.label);
    setMarca([]);
    setRubro(null);
  }

  const handleChangeMarca = (event) => {
    setMarca(event);
    setRubro(null);
  };

  function handleSelectRubro(event) {
    setRubro(event.label);
  }

  const TableRowStyled = styled(TableRow)`
    &:nth-of-type(odd) {
      background-color: #e8e8ff;
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

  const products = [
    {
      id: 1,
      name: "Producto 1",
      price: "86.859,62",
      stock: 1,
      marca: "SKF",
    },
    {
      id: 2,
      name: "Producto 2",
      price: "86.859,62",
      stock: 0,
      marca: "SKF",
    },
    {
      id: 3,
      name: "Producto 3",
      price: "86.859,62",
      stock: null,
      marca: "SKF",
    },
    // ... otros productos
  ];

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  return (
    <>
      <div className="font-montserrat px-2">
        <div className="bg-white w-fit py-2 px-3 rounded-md">
          <Breadcrumbs separator={<MdNavigateNext />} aria-label="breadcrumb">
            <Link
              underline="hover"
              key="1"
              color="inherit"
              href="/"
              onClick={handleClick}
            >
              Busqueda Familias
            </Link>
            ,
            {vehiculoName.length > 0 ? (
              <Link
                underline="hover"
                key="2"
                color="inherit"
                href="/"
                onClick={handleClick}
              >
                <div className="flex space-x-2 items-center">
                  {vehiculoName?.map((vehiculo) => (
                    <p key="" className="text-gris">
                      {vehiculo.label}
                    </p>
                  ))}
                </div>
              </Link>
            ) : null}
            ,
            {!familia ? null : (
              <p key="" className="text-gris">
                {familia}
              </p>
            )}
            ,
            {marca.length > 0 ? (
              <Link
                underline="hover"
                key="2"
                color="inherit"
                href="/"
                onClick={handleClick}
              >
                <div className="flex space-x-2 items-center">
                  {marca?.map((marca) => (
                    <p key="" className="text-gris">
                      {marca.label}
                    </p>
                  ))}
                </div>
              </Link>
            ) : null}
            ,
            {!rubro ? null : (
              <p key="" className="text-gris">
                {rubro}
              </p>
            )}
            ,
            <p key="" className="text-gris">
              Página 1 de 1
            </p>
            ,
          </Breadcrumbs>
        </div>
      </div>
      <div className="flex font-montserrat mt-5 px-2 rounded-t-md bg-white border border-[#D9D9D9]">
        <div className="w-full p-2">
          <p className="text-[#969696] font-bold text-xs uppercase">Vehículo</p>

          <Select
            isMulti
            name="vehiculos"
            options={vehiculos}
            className="text-black font-montserrat"
            placeholder="Todos los vehículos..."
            onChange={handleChangeVehiculo}
          />
        </div>
        <div className="w-full p-2">
          <p className="text-[#969696] font-bold text-xs uppercase">Familias</p>

          <Select
            options={familias}
            placeholder="Todas las familias..."
            className="text-black font-montserrat"
            onChange={handleSelectFamilia}
          />
        </div>
        <div className="w-full p-2">
          <p className="text-[#969696] font-bold text-xs uppercase">Marcas</p>

          <Select
            isMulti
            name="marcas"
            options={marcas}
            className="text-black font-montserrat"
            placeholder="Todas las marcas..."
            onChange={handleChangeMarca}
          />
        </div>
        <div className="w-full p-2">
          <p className="text-[#969696] font-bold text-xs uppercase">Rubros</p>

          <Select
            options={rubros}
            placeholder="Todos los rubros..."
            className="text-black font-montserrat"
            onChange={handleSelectRubro}
          />
        </div>
      </div>
      <div className=" font-montserrat">
        <Table>
          <TableHead className="text-white rounded-t-lg p-5 w-full uppercase">
            <TableRow className=" bg-azul flex justify-between !rounded-t-lg items-center">
              <TableCell>
                <div className="font-bold text-white flex justify-center">
                  Artículo
                </div>
              </TableCell>
              <TableCell>
                <div className="font-bold text-white flex justify-center">
                  Aplicaciones
                </div>
              </TableCell>
              <TableCell>
                <div className="font-bold text-white flex justify-center">
                  Marca
                </div>
              </TableCell>
              <TableCell>
                <div className="font-bold text-white flex justify-center">
                  Costo
                </div>
              </TableCell>
              <TableCell>
                <div className="font-bold text-white flex justify-center">
                  Cantidad
                </div>
              </TableCell>
              <TableCell>
                <div className="font-bold text-white flex justify-center">
                  SUB-TOTAL
                </div>
              </TableCell>
              <TableCell>{""}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="bg-white">
            <TableRowStyled className="text-black p-5 flex justify-between w-full last-of-type:rounded-b-lg items-center">
              <TableCell className="w-full text-center">
                <div className="font-bold flex items-center justify-start  space-x-3">
                  <Image
                    src="/VKPC-85097_1_SKF.jpg"
                    height={100}
                    width={100}
                    alt="Imagen"
                    className="mr-3"
                  />
                  <div className="flex items-center space-x-2">
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
                </div>
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="text-gris text-xs flex items-center space-x-2 justify-start">
                  <p>SEAT IBIZA</p>
                  <div className="group">
                    {" "}
                    <div className="absolute z-30 hidden group-hover:block bg-white text-black p-3 rounded-md border border-gris space-y-3">
                      <div>
                        <p className="font-bold text-black text-base">
                          Bomba de agua
                        </p>
                        <p className=" text-black text-sm">1.4 (motor AEX)</p>
                      </div>
                    </div>
                    <CiCircleInfo className="font-bold text-lg" />
                  </div>
                </div>
                <div className="text-gris text-xs flex items-center space-x-2 justify-start">
                  <p>SEAT INCA</p>
                  <div className="group">
                    {" "}
                    <div className="absolute z-30 hidden group-hover:block bg-white text-black p-3 rounded-md border border-gris space-y-3">
                      <div>
                        <p className="font-bold text-black text-base">
                          Bomba de agua
                        </p>
                        <p className=" text-black text-sm">1.6 (motor AEE)</p>
                      </div>
                    </div>
                    <CiCircleInfo className="font-bold text-lg" />
                  </div>
                </div>
                <div className="text-gris text-xs flex items-center space-x-2 justify-start">
                  <p>VW CROSSFOX</p>
                  <div className="group">
                    {" "}
                    <div className="absolute z-30 hidden group-hover:block bg-white text-black p-3 rounded-md border border-gris space-y-3">
                      <div>
                        <p className="font-bold text-black text-base">
                          Bomba de agua
                        </p>
                        <p className=" text-black text-sm">
                          1.6 (motor EEA111 BAH/CFZ)
                        </p>
                      </div>
                    </div>
                    <CiCircleInfo className="font-bold text-lg" />
                  </div>
                </div>
                <div className="text-gris text-xs flex items-center space-x-2 justify-start">
                  <p>VW FOX</p>
                  <div className="group">
                    {" "}
                    <div className="absolute z-30 hidden group-hover:block bg-white text-black p-3 rounded-md border border-gris space-y-3">
                      <div>
                        <p className="font-bold text-black text-base">
                          Bomba de agua
                        </p>
                        <p className=" text-black text-sm">
                          1.6 (motor EEA111 BAH/CFZ)
                        </p>
                      </div>
                    </div>
                    <CiCircleInfo className="font-bold text-lg" />
                  </div>
                </div>
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="flex space-x-4 items-center font-bold">
                  <p>SKF </p>
                </div>
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="font-bold">$ 86.859,62</div>
              </TableCell>
              {/* contador */}
              <TableCell className="w-full flex justify-center">
                <div className="w-full flex justify-center">
                  <div className="w-full flex items-center  justify-center space-x-2">
                    <div
                      className="text-amarillo p-2 bg-azul rounded-md cursor-pointer hover:bg-amarillo hover:text-azul"
                      onClick={
                        cantidad < 1
                          ? () => setCantidad(0)
                          : () => setCantidad(cantidad - 1)
                      }
                    >
                      <FaMinus />
                    </div>
                    <input
                      type="number"
                      min="0"
                      max="1000"
                      value={cantidad < 1 ? 0 : cantidad}
                      onChange={handleCantidad}
                      className="px-2 rounded-md border border-black h-full text-center"
                    />
                    <div
                      className="text-amarillo p-2 bg-azul rounded-md cursor-pointer hover:bg-amarillo hover:text-azul"
                      onClick={() => setCantidad(cantidad + 1)}
                    >
                      <FaPlus />
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="font-bold ">
                  $ {cantidad < 1 ? 0 : cantidad * 86859.62}
                </div>
              </TableCell>
              <TableCell className="w-full text-center space-y-2">
                <div className="py-1 px-2 bg-amarillo text-azul rounded-sm cursor-pointer font-bold hover:bg-azul hover:text-amarillo">
                  <p>Pedir</p>
                </div>

                <div className="font-bold text-green-600">
                  <p>Disponible</p>
                </div>
              </TableCell>
            </TableRowStyled>
            <TableRowStyled className="text-black p-5 flex justify-between w-full last-of-type:rounded-b-lg items-center">
              <TableCell className="w-full ">
                <div className="font-bold flex items-center justify-start space-x-3">
                  <Image
                    src="/VKPC-85097_1_SKF.jpg"
                    height={100}
                    width={100}
                    alt="Imagen"
                    className="mr-3"
                  />
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
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
                    <div>
                      <p className="font-bold text-black text-left">
                        Es parte de
                      </p>
                      <div className="flex font-normal items-center space-x-2 text-sm text-left">
                        <p className="cursor-pointer hover:border-b-2 hover:border-amarillo">
                          VKMC 01107 A1
                        </p>
                        <span>-</span>
                        <p className="cursor-pointer hover:border-b-2 hover:border-amarillo">
                          VKMC 01107 A1
                        </p>
                        <span>-</span>
                        <p className="cursor-pointer hover:border-b-2 hover:border-amarillo">
                          VKMC 01107 A1
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-black text-left">
                        Intercambiable
                      </p>
                      <div className="flex font-normal items-center space-x-2 text-sm text-left">
                        <p className="cursor-pointer hover:border-b-2 hover:border-amarillo">
                          BA358 VMG
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="text-gris text-xs flex items-center space-x-2 justify-start">
                  <p>Varias Varios (...)</p>
                  <div className="group">
                    {" "}
                    <div className="absolute z-30 hidden group-hover:block bg-white text-black p-3 rounded-md border border-gris space-y-3">
                      <p className="font-bold text-black text-base">
                        Rodamientos Rígidos de Bolas
                      </p>
                    </div>
                    <CiCircleInfo className="font-bold text-lg" />
                  </div>
                </div>
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="flex space-x-4 items-center font-bold">
                  <p>SKF </p>
                </div>
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="font-bold">$ 86.859,62</div>
              </TableCell>
              {/* contador */}
              <TableCell className="w-full flex justify-center">
                <div className="w-full flex justify-center">
                  <div className="w-full flex items-center  justify-center space-x-2">
                    <div
                      className="text-amarillo p-2 bg-azul rounded-md cursor-pointer hover:bg-amarillo hover:text-azul"
                      onClick={
                        cantidad < 1
                          ? () => setCantidad2(0)
                          : () => setCantidad2(cantidad2 - 1)
                      }
                    >
                      <FaMinus />
                    </div>
                    <input
                      type="number"
                      min="0"
                      max="1000"
                      value={cantidad2 < 1 ? 0 : cantidad2}
                      onChange={handleCantidad2}
                      className="px-2 rounded-md border border-black h-full text-center"
                    />
                    <div
                      className="text-amarillo p-2 bg-azul rounded-md cursor-pointer hover:bg-amarillo hover:text-azul"
                      onClick={() => setCantidad2(cantidad2 + 1)}
                    >
                      <FaPlus />
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="font-bold ">
                  $ {cantidad2 < 1 ? 0 : cantidad2 * 86859.62}
                </div>
              </TableCell>
              <TableCell className="w-full text-center space-y-2">
                <div className="py-1 px-2 bg-amarillo text-azul rounded-sm cursor-pointer font-bold hover:bg-azul hover:text-amarillo">
                  <p>Pedir</p>
                </div>

                <div className="font-bold text-red-600">
                  <p>Sin Stock</p>
                </div>
              </TableCell>
            </TableRowStyled>
            <TableRowStyled className="text-black p-5 flex justify-between w-full last-of-type:rounded-b-lg items-center">
              <TableCell className="w-full text-center">
                <div className="font-bold flex items-center justify-start  space-x-3">
                  <Image
                    src="/VKPC-85097_1_SKF.jpg"
                    height={100}
                    width={100}
                    alt="Imagen"
                    className="mr-3"
                  />
                  <div className="flex items-center space-x-2">
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
                </div>
              </TableCell>
              <TableCell className="w-full  text-left">
                <div className="text-gris text-xs flex items-center space-x-2 justify-start">
                  <p>Varias Varios (...)</p>
                  <div className="group">
                    {" "}
                    <div className="absolute z-30 hidden group-hover:block bg-white text-black p-3 rounded-md border border-gris space-y-3">
                      <p className="font-bold text-black text-base">
                        Rodamientos Rígidos de Bolas
                      </p>
                    </div>
                    <CiCircleInfo className="font-bold text-lg" />
                  </div>
                </div>
                <div className="text-gris text-xs flex items-center space-x-2 justify-start">
                  <p>SEAT IBIZA</p>
                  <div className="group">
                    {" "}
                    <div className="absolute z-30 hidden group-hover:block bg-white text-black p-3 rounded-md border border-gris space-y-3">
                      <div>
                        <p className="font-bold text-black text-base">
                          Bomba de agua
                        </p>
                        <p className=" text-black text-sm">1.4 (motor AEX)</p>
                      </div>
                    </div>
                    <CiCircleInfo className="font-bold text-lg" />
                  </div>
                </div>
                <div className="text-gris text-xs flex items-center space-x-2 justify-start">
                  <p>SEAT INCA</p>
                  <div className="group">
                    {" "}
                    <div className="absolute z-30 hidden group-hover:block bg-white text-black p-3 rounded-md border border-gris space-y-3">
                      <div>
                        <p className="font-bold text-black text-base">
                          Bomba de agua
                        </p>
                        <p className=" text-black text-sm">1.6 (motor AEE)</p>
                      </div>
                    </div>
                    <CiCircleInfo className="font-bold text-lg" />
                  </div>
                </div>
                <div className="text-gris text-xs flex items-center space-x-2 justify-start">
                  <p>VW CROSSFOX</p>
                  <div className="group">
                    {" "}
                    <div className="absolute z-30 hidden group-hover:block bg-white text-black p-3 rounded-md border border-gris space-y-3">
                      <div>
                        <p className="font-bold text-black text-base">
                          Bomba de agua
                        </p>
                        <p className=" text-black text-sm">
                          1.6 (motor EEA111 BAH/CFZ)
                        </p>
                      </div>
                    </div>
                    <CiCircleInfo className="font-bold text-lg" />
                  </div>
                </div>
                <div className="text-gris text-xs flex items-center space-x-2 justify-start">
                  <p>VW FOX</p>
                  <div className="group">
                    {" "}
                    <div className="absolute z-30 hidden group-hover:block bg-white text-black p-3 rounded-md border border-gris space-y-3">
                      <div>
                        <p className="font-bold text-black text-base">
                          Bomba de agua
                        </p>
                        <p className=" text-black text-sm">
                          1.6 (motor EEA111 BAH/CFZ)
                        </p>
                      </div>
                    </div>
                    <CiCircleInfo className="font-bold text-lg" />
                  </div>
                </div>
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="flex space-x-4 items-center font-bold">
                  <p>SKF </p>
                </div>
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="font-bold">$ 86.859,62</div>
              </TableCell>
              {/* contador */}
              <TableCell className="w-full flex justify-center">
                <div className="w-full flex justify-center">
                  <div className="w-full flex items-center  justify-center space-x-2">
                    <div
                      className="text-amarillo p-2 bg-azul rounded-md cursor-pointer hover:bg-amarillo hover:text-azul"
                      onClick={
                        cantidad < 1
                          ? () => setCantidad3(0)
                          : () => setCantidad3(cantidad3 - 1)
                      }
                    >
                      <FaMinus />
                    </div>
                    <input
                      type="number"
                      min="0"
                      max="1000"
                      value={cantidad3 < 1 ? 0 : cantidad3}
                      onChange={handleCantidad3}
                      className="px-2 rounded-md border border-black h-full text-center"
                    />
                    <div
                      className="text-amarillo p-2 bg-azul rounded-md cursor-pointer hover:bg-amarillo hover:text-azul"
                      onClick={() => setCantidad3(cantidad3 + 1)}
                    >
                      <FaPlus />
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="font-bold ">
                  {cantidad3 < 1 ? 0 : cantidad3 * 86859.62}
                </div>
              </TableCell>
              <TableCell className="w-full text-center space-y-2">
                <div className="py-1 px-2 bg-amarillo text-azul rounded-sm cursor-pointer font-bold hover:bg-azul hover:text-amarillo">
                  <p>Pedir</p>
                </div>

                <div className="font-bold text-[#EFBE5E]">
                  <p>Consultar Stock</p>
                </div>
              </TableCell>
            </TableRowStyled>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
