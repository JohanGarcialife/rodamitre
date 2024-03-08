import React, { useState } from "react";
import Select from "react-select";

export default function Reclamos() {
  const [origen, setOrigen] = useState(null);
  const [fecha, setFecha] = useState(null);
  const [pedido, setPedido] = useState(null);

  function handleSelectOrigen(event) {
    setOrigen(event.label);
  }

  function handleSelectFecha(event) {
    setFecha(event.target.value);
  }

  function handleSelectPedido(event) {
    setPedido(event.target.value);
  }

  const origenes = [
    { value: "Web", label: "Web" },
    { value: "Email", label: "E-mail" },
    { value: "Telefono", label: "Teléfono" },
    { value: "Vendedor", label: "Vendedor" },
  ];

  return (
    <>
      <div className="flex space-x-5 font-montserrat rounded-t-md bg-white px-2">
        <div className=" border border-[#D9D9D9] w-full p-2">
          <p className="text-[#969696] font-bold text-xs uppercase ">
            Origen del Pedido
          </p>
          <Select
            options={origenes}
            placeholder="Todas las familias..."
            className="text-black font-montserrat"
            onChange={handleSelectOrigen}
          />
        </div>
        <div className="border border-[#D9D9D9] w-full p-2">
          <p className="text-[#969696] font-bold text-xs uppercase ">
            Fecha de Factura / Pedido
          </p>
          <input
            className="pl-4 w-full text-black"
            type="date"
            label={fecha}
            value={fecha}
            onChange={handleSelectFecha}
          />
        </div>
        <div className="  border border-[#D9D9D9] w-full p-2">
          <p className="text-[#969696] font-bold text-xs uppercase">
            Numero de Factura / Pedido
          </p>
          <input
            className="pl-4 w-full text-black"
            label={pedido}
            value={pedido}
            placeholder="Ingrese el número de factura o pedido..."
            onChange={handleSelectPedido}
            type="text"
          />
        </div>
      </div>
      <div className=" border border-[#D9D9D9] w-full p-2 font-montserrat">
        <p className="text-[#969696] font-bold text-xs uppercase ">
          Comentario
        </p>
        <textarea
          textarea
          rows="8"
          placeholder="Dejenos su mensaje"
          className="pl-4 w-full h-full"
        ></textarea>
      </div>
      <button className="bg-amarillo hover:bg-azul text-white rounded-md px-4 py-2 mt-5 font-montserrat uppercase">
        Enviar
      </button>
    </>
  );
}
