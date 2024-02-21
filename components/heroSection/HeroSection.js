import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import BuscadorFamilia from "../buscadores/BuscadorFamilia";
import BuscadorVehiculo from "../buscadores/BuscadorVehiculo";
import BuscadorRapida from "../buscadores/BuscadorRapida";
import BuscadorOferta from "../buscadores/BuscadorOferta";
import Reclamos from "../reclamos/Reclamos";
import Garantia from "../garantias/Garantia";

export default function HeroSection(props) {
  const { isLogin, setIsLogin, buscador } = props;

  const formik = useFormik({
    initialValues: {
      user: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit: async (formData) => {
      console.log(formData, "esto es data");

      if (
        formData.user === "27-40394854-9" &&
        formData.password === "VUXWGQNB"
      ) {
        setIsLogin(true);
        console.log("estamos logueados");
      } else {
        toast.error("Usuario o contraseña invalido");
      }
    },
  });

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

              <form
                className="bg-white/25 p-8 w-2/5 h-fit"
                onSubmit={formik.handleSubmit}
              >
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
                      className={
                        formik.errors.user && formik.touched.user
                          ? "pl-3 py-1 w-full rounded-md text-black bg-red-300"
                          : "pl-3 py-1 w-full rounded-md text-black"
                      }
                      type="text"
                      placeholder="Username"
                      name="user"
                      onChange={formik.handleChange}
                    />
                    <input
                      className={
                        formik.errors.password && formik.touched.password
                          ? "pl-3 py-1 w-full rounded-md text-black bg-red-300"
                          : "pl-3 py-1 w-full rounded-md text-black"
                      }
                      type="password"
                      placeholder="Your password"
                      name="password"
                      onChange={formik.handleChange}
                      error={formik.errors.password}
                    />
                    <button
                      type="submit"
                      /* onClick={() => setIsLogin(!isLogin)} */
                      className="px-4 py-2 bg-amarillo text-white rounded-sm hover:bg-azul"
                    >
                      INGRESAR
                    </button>
                  </div>
                </div>
              </form>
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
          {buscador === "Oferta" && <BuscadorOferta />}
          {buscador === "Reclamo" && <Reclamos />}
          {buscador === "Garantia" && <Garantia />}
        </div>
      )}
    </div>
  );
}

const basicSchema = Yup.object().shape({
  user: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});
