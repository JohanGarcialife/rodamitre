import { Button, Modal } from "@mui/material";
import React, { useState } from "react";

export default function Garantia() {
  const [open, setOpen] = useState(false);
  const [vehiculo, setVehiculo] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleSelectVehiculo(event) {
    setVehiculo(event.target.value);
  }

  return (
    <>
      <div>
        <div className=" flex justify-center font-montserrat">
          <Button onClick={handleOpen}>Nueva Garantía</Button>
        </div>
        <Modal open={open} onClose={handleClose}>
          <div className="flex items-center justify-center w-screen h-screen font-montserrat">
            <div className="bg-white rounded-lg w-fit h-fit p-5">
              <div className="border-b-2 border-gris flex justify-center items-center mb-5">
                <p className="text-black text-4xl border-b-4 border-amarillo">
                  Nueva Garantía
                </p>
              </div>
              <div className=" flex flex-col justify-center items-center space-y-5 px-20">
                <p className="text-black">
                  En caso que haya existido una{" "}
                  <span className="font-bold text-center">
                    {" "}
                    falla de algún artículo
                  </span>{" "}
                  completá los siguientes campos según corresponda y estaremos
                  solucionandolo.
                </p>
                <p className="text-black">
                  En caso de{" "}
                  <span className="font-bold text-center">
                    inconvenientes operativos
                  </span>
                  , generar la{" "}
                  <span className="font-bold text-center">
                    solicitud en <a href="">Reclamos</a>.
                  </span>
                </p>
                <div className="flex items-center w-full space-x-5">
                  <div className="w-full space-y-5">
                    <div className="border-b-2 border-gris flex justify-center items-center mb-5">
                      <p className="text-black text-xl border-b-4 border-amarillo">
                        Producto
                      </p>
                    </div>
                    <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
                      <p className="text-[#969696] font-bold text-[8px] ">
                        Designación*
                      </p>
                      <input
                        type="text"
                        placeholder="Designación*"
                        className="pl-4 w-full"
                      />
                    </div>
                    <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
                      {/* <p className="text-[#969696] font-bold text-sm ">
                        Vehículo
                      </p> */}
                      <select
                        className="pl-4 w-full text-black border-0"
                        // label={vehiculo}
                        // value={vehiculo}
                        // onChange={handleSelectVehiculo}
                      ></select>
                    </div>
                  </div>
                  <div className="w-full space-y-5">
                    <div className="border-b-2 border-gris flex justify-center items-center mb-5">
                      <p className="text-black text-xl border-b-4 border-amarillo">
                        Vehículo
                      </p>
                    </div>
                    <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
                      <p className="text-[#969696] font-bold text-sm ">
                        Vehículo
                      </p>
                      <select
                        className="pl-4 w-full text-black border-0"
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
                      {/* <p className="text-[#969696] font-bold text-sm ">
                        Vehículo
                      </p> */}
                      <select
                        className="pl-4 w-full text-black border-0"
                        // label={vehiculo}
                        // value={vehiculo}
                        // onChange={handleSelectVehiculo}
                      ></select>
                    </div>
                    <div className="flex space-x-5 ">
                      <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
                        {/* <p className="text-[#969696] font-bold text-sm ">
                        Vehículo
                      </p> */}
                        <select
                          className="pl-4 w-full text-black border-0"
                          // label={vehiculo}
                          // value={vehiculo}
                          // onChange={handleSelectVehiculo}
                        ></select>
                      </div>
                      <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
                        <p className="text-[#969696] font-bold text-[8px] ">
                          Designación*
                        </p>
                        <input
                          type="text"
                          placeholder="Designación*"
                          className="pl-4 w-full"
                        />
                      </div>
                    </div>
                    <div className="flex space-x-5 ">
                      <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
                        <p className="text-[#969696] font-bold text-[8px] ">
                          Designación*
                        </p>
                        <input
                          type="text"
                          placeholder="Designación*"
                          className="pl-4 w-full"
                        />
                      </div>
                      <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
                        <p className="text-[#969696] font-bold text-[8px] ">
                          Designación*
                        </p>
                        <input
                          type="text"
                          placeholder="Designación*"
                          className="pl-4 w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
        <table className="w-full mt-5 font-montserrat">
          <thead className="bg-amarillo text-black rounded-t-lg p-5 flex justify-between w-full ">
            <td className="w-full text-center font-bold ">NRO DE RECLAMO</td>
            <td className="w-full text-center font-bold ">FECHA GENERACIÓN</td>
            <td className="w-full text-center font-bold ">PRODUCTO</td>
            <td className="w-full text-center font-bold ">UNIDADES</td>
            <td className="w-full text-center font-bold ">TRACKING PEDIDO</td>
          </thead>
          <tbody>
            <tr className="bg-[#FFEEDC] text-black p-5 flex justify-between w-full last-of-type:rounded-b-lg items-center">
              <td className="w-full text-center">Reclamo</td>
              <td className="w-full text-center">Fecha</td>
              <td className="w-full text-center">Producto</td>
              <td className="w-full text-center">Cantidad</td>
              <td className="w-full text-center">
                <p>Tracking</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
