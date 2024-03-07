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
  Select,
  Box,
  OutlinedInput,
  MenuItem,
  Stack,
  Breadcrumbs,
  Link,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useTheme } from "@mui/material/styles";
import { IoClose } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const vehiculos = [
  "Chevrolet",
  "Ford",
  "Fiat",
  "Citroen",
  "Mazda",
  "Toyota",
  "Mitsubishi",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function BuscadorFamilia() {
  const [marca, setMarca] = useState(null);
  const [familia, setFamilia] = useState(null);
  const [rubro, setRubro] = useState(null);
  const [quantities, setQuantities] = useState({});
  const [cantidad, setCantidad] = useState(0);
  const [cantidad2, setCantidad2] = useState(0);
  const [cantidad3, setCantidad3] = useState(0);
  const [vehiculoName, setVehiculoName] = useState([]);
  const theme = useTheme();
  console.log(vehiculoName.length);

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

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setVehiculoName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  function handleSelectMarca(event) {
    setMarca(event.target.value);
  }

  function handleSelectFamilia(event) {
    setFamilia(event.target.value);
  }

  function handleSelectRubro(event) {
    setRubro(event.target.value);
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

  const breadcrumbs2 = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Busqueda Familias
    </Link>,

    <p key="" className="text-gris">
      Página 1 de 1
    </p>,
  ];

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Busqueda Familias
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      <div className="flex space-x-2 items-center">
        {vehiculoName.map((vehiculo) => (
          <p key="" className="text-gris">
            {vehiculo}
          </p>
        ))}
      </div>
    </Link>,
    <p key="" className="text-gris">
      Página 1 de 1
    </p>,
  ];
  return (
    <>
      <div className="font-montserrat px-2">
        <div className="bg-white w-fit py-2 px-3 rounded-md">
          {vehiculoName.length > 0 ? (
            <Breadcrumbs separator={<MdNavigateNext />} aria-label="breadcrumb">
              {breadcrumbs}
            </Breadcrumbs>
          ) : (
            <Breadcrumbs separator={<MdNavigateNext />} aria-label="breadcrumb">
              {breadcrumbs2}
            </Breadcrumbs>
          )}
        </div>
      </div>
      <div className="flex space-x-5 font-montserrat px-2 mt-5">
        <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
          <p className="text-[#969696] font-bold text-xs uppercase">Vehículo</p>

          <Select
            multiple
            value={vehiculoName}
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <div
                    key={value}
                    label={value}
                    className="bg-azul text-white px-3 py-1 rounded-md  flex items-center font-bold cursor-pointer"
                    onClick={() => vehiculoName.splice({ value })}
                  >
                    {value}
                    {/* <IoClose className="text-amarillo font-bold text-2xl ml-1" /> */}
                  </div>
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
            className="w-full"
          >
            {vehiculos.map((vehiculo) => (
              <MenuItem
                key={vehiculo}
                value={vehiculo}
                style={getStyles(vehiculo, vehiculoName, theme)}
              >
                {vehiculo}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
          <p className="text-[#969696] font-bold text-xs uppercase ">Familia</p>
          <Select
            className="pl-4 w-full text-black"
            value={familia}
            onChange={handleSelectFamilia}
          >
            <MenuItem value="Bobinas-de-ignicion">Bobinas de ignición</MenuItem>
            <MenuItem value="Bombas-de-agua">Bombas de agua</MenuItem>
            <MenuItem value="Bombas-de-combustible">
              Bombas de combustible
            </MenuItem>
            <MenuItem value="Filtros">Filtros</MenuItem>
          </Select>
        </div>
        <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
          <p className="text-[#969696] font-bold text-xs uppercase ">Marca</p>
          <Select
            className="pl-4 w-full text-black"
            value={marca}
            onChange={handleSelectMarca}
          >
            <MenuItem value="Chevrolet">Hescher</MenuItem>
            <MenuItem value="Citroen">Mahler</MenuItem>
          </Select>
        </div>
        <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
          <p className="text-[#969696] font-bold text-xs uppercase ">Rubro</p>
          <Select
            className="pl-4 w-full text-black"
            value={rubro}
            onChange={handleSelectRubro}
          >
            <MenuItem value="Bobinas-de-ignicion">Bobinas de ignición</MenuItem>
          </Select>
        </div>
      </div>
      <div className=" font-montserrat mt-5 ">
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
                <div className="font-bold flex items-center justify-center space-x-3">
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
                <div className="text-gris text-xs flex items-center space-x-2 justify-center">
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
                <div className="text-gris text-xs flex items-center space-x-2 justify-center">
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
                <div className="text-gris text-xs flex items-center space-x-2 justify-center">
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
                <div className="text-gris text-xs flex items-center space-x-2 justify-center">
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
                      className="text-amarillo p-3 bg-azul rounded-md cursor-pointer hover:bg-amarillo hover:text-azul"
                      onClick={() => setCantidad(cantidad - 1)}
                    >
                      <FaMinus />
                    </div>
                    <input
                      type="number"
                      value={cantidad}
                      onChange={(e) => handleCantidad()}
                      min="0"
                      max="1000"
                      className="px-2 rounded-md border border-black h-full text-center"
                    />
                    <div
                      className="text-amarillo p-3 bg-azul rounded-md cursor-pointer hover:bg-amarillo hover:text-azul"
                      onClick={() => setCantidad(cantidad + 1)}
                    >
                      <FaPlus />
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="font-bold ">$ {cantidad * 86859.62}</div>
              </TableCell>
              <TableCell className="w-full text-center space-y-2">
                <div className="py-1 px-2 bg-amarillo text-azul rounded-sm cursor-pointer font-bold hover:bg-azul hover:text-amarillo">
                  <p>Pedir</p>
                </div>

                <div className="font-bold text-green-600">
                  <p>Disponible</p>
                </div>

                {/* {product.stock === 0 && (
                    <div className="font-bold text-red-600">
                      <p>Sin Stock</p>
                    </div>
                  )}
                  {product.stock === null && (
                    <div className="font-bold text-red-600">
                      <p>Sin Stock</p>
                    </div>
                  )} */}
              </TableCell>
            </TableRowStyled>
            <TableRowStyled className="text-black p-5 flex justify-between w-full last-of-type:rounded-b-lg items-center">
              <TableCell className="w-full text-center">
                <div className="font-bold flex items-center justify-center space-x-3">
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
                <div className="text-gris text-xs flex items-center space-x-2 justify-center">
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
                      className="text-amarillo p-3 bg-azul rounded-md cursor-pointer hover:bg-amarillo hover:text-azul"
                      onClick={() => setCantidad2(cantidad2 - 1)}
                    >
                      <FaMinus />
                    </div>
                    <input
                      type="number"
                      value={cantidad}
                      onChange={(e) => handleCantidad2()}
                      min="0"
                      max="1000"
                      className="px-2 rounded-md border border-black h-full text-center"
                    />
                    <div
                      className="text-amarillo p-3 bg-azul rounded-md cursor-pointer hover:bg-amarillo hover:text-azul"
                      onClick={() => setCantidad2(cantidad2 + 1)}
                    >
                      <FaPlus />
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="font-bold ">$ {cantidad2 * 86859.62}</div>
              </TableCell>
              <TableCell className="w-full text-center space-y-2">
                <div className="py-1 px-2 bg-amarillo text-azul rounded-sm cursor-pointer font-bold hover:bg-azul hover:text-amarillo">
                  <p>Pedir</p>
                </div>

                <div className="font-bold text-red-600">
                  <p>Sin Stock</p>
                </div>

                {/* {product.stock === null && (
                    <div className="font-bold text-red-600">
                      <p>Sin Stock</p>
                    </div>
                  )} */}
              </TableCell>
            </TableRowStyled>
            <TableRowStyled className="text-black p-5 flex justify-between w-full last-of-type:rounded-b-lg items-center">
              <TableCell className="w-full text-center">
                <div className="font-bold flex items-center justify-center space-x-3">
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
                <div className="text-gris text-xs flex items-center space-x-2 justify-center">
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
                <div className="text-gris text-xs flex items-center space-x-2 justify-center">
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
                <div className="text-gris text-xs flex items-center space-x-2 justify-center">
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
                <div className="text-gris text-xs flex items-center space-x-2 justify-center">
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
                <div className="text-gris text-xs flex items-center space-x-2 justify-center">
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
                      className="text-amarillo p-3 bg-azul rounded-md cursor-pointer hover:bg-amarillo hover:text-azul"
                      onClick={() => setCantidad3(cantidad3 - 1)}
                    >
                      <FaMinus />
                    </div>
                    <input
                      type="number"
                      value={cantidad}
                      onChange={(e) => handleCantidad3()}
                      min="0"
                      max="1000"
                      className="px-2 rounded-md border border-black h-full text-center"
                    />
                    <div
                      className="text-amarillo p-3 bg-azul rounded-md cursor-pointer hover:bg-amarillo hover:text-azul"
                      onClick={() => setCantidad3(cantidad3 + 1)}
                    >
                      <FaPlus />
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="font-bold ">$ {cantidad3 * 86859.62}</div>
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

{
  /* <TableBody className="bg-white">
            {products.map((product) => (
              <TableRowStyled
                key={product.id}
                className="text-black p-5 flex justify-between w-full last-of-type:rounded-b-lg items-center"
              >
                <TableCell className="w-full text-center">
                  <div className="font-bold flex items-center justify-center space-x-3">
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
                    <p>{product.name} </p>
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
                </TableCell>
                <TableCell className="w-full text-center">
                  <div className="flex space-x-4 items-center font-bold">
                    <p>{product.marca} </p>
                  </div>
                </TableCell>
                <TableCell className="w-full text-center">
                  <div className="font-bold">$ {product.price} </div>
                </TableCell>
                {/* contador */
}
{
  /* <TableCell className="w-full flex justify-center">
                  <div className="w-full flex justify-center">
                    <div className="w-full flex items-center  justify-center space-x-2">
                      <div
                        className="text-amarillo p-3 bg-azul rounded-md cursor-pointer hover:bg-amarillo hover:text-azul"
                        onClick={() =>
                          setQuantities(quantities[product.id] - 1)
                        }
                      >
                        <FaMinus />
                      </div>
                      <input
                        type="number"
                        value={quantities[product.id] || 0}
                        onChange={(e) =>
                          handleQuantityChange(
                            product.id,
                            parseInt(e.target.value)
                          )
                        }
                        min="0"
                        max="1000"
                        className="px-2 rounded-md border border-black h-full text-center"
                      />
                      <div
                        className="text-amarillo p-3 bg-azul rounded-md cursor-pointer hover:bg-amarillo hover:text-azul"
                        onClick={() =>
                          setQuantities(quantities[product.id] + 1)
                        }
                      >
                        <FaPlus />
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="w-full text-center">
                  <div className="font-bold ">
                    $ {quantities[product.id] * product.price || 0}
                  </div>
                </TableCell>
                <TableCell className="w-full text-center space-y-2">
                  <div className="py-1 px-2 bg-amarillo text-azul rounded-sm cursor-pointer font-bold hover:bg-azul hover:text-amarillo">
                    <p>Pedir</p>
                  </div>
                  {product.stock > 0 && (
                    <div className="font-bold text-green-600">
                      <p>Disponible</p>
                    </div>
                  )}

                  {product.stock === 0 && (
                    <div className="font-bold text-red-600">
                      <p>Sin Stock</p>
                    </div>
                  )}
                  {product.stock === null && (
                    <div className="font-bold text-red-600">
                      <p>Sin Stock</p>
                    </div>
                  )}
                </TableCell>
              </TableRowStyled>
            ))} 
          </TableBody> */
}
