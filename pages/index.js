import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import Layout from "@/layout/Layout";
import HeroSection from "@/components/heroSection/HeroSection";
import Distribuidores from "@/components/distribuidores/Distribuidores";
import Nosotros from "@/components/nosotros/Nosotros";
import Productos from "@/components/productos/Productos";
import Contacto from "@/components/contacto/Contacto";
import { Modal } from "@mui/material";
import { IoClose } from "react-icons/io5";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [buscador, setBuscador] = useState("Familia");

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
        setOpen(false);
        console.log("estamos logueados");
      } else {
        toast.error("Usuario o contraseña invalido");
      }
    },
  });

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    try {
      setIsLogin(true);
      setOpen(false);
    } catch (error) {}
  };

  return (
    <>
      <Layout
        handleOpen={handleOpen}
        handleClose={handleClose}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        setBuscador={setBuscador}
        buscador={buscador}
      >
        <HeroSection
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          buscador={buscador}
          setBuscador={setBuscador}
        />
        {isLogin === false && <Distribuidores />}
        {isLogin === false && <Nosotros />}
        {isLogin === false && <Productos />}
        {isLogin === false && <Contacto />}
      </Layout>
      <Modal open={open} onClose={handleClose} className="max-w-screen">
        <div className="flex items-center justify-center w-screen h-screen font-montserrat">
          <form
            className="relative w-96 bg-[#EDEDED] p-10 rounded-sm"
            onSubmit={formik.handleSubmit}
          >
            <IoClose
              onClick={handleClose}
              className="text-gris/75  absolute top-3 right-3 cursor-pointer "
            />
            <p className="text-amarillo text-lg font-semibold">
              SIGN IN YOUR ACCOUNT TO HAVE ACCESS TO DIFFERENT FEATURES
            </p>
            <div className="my-5 space-y-3">
              <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
                <p className="text-[#969696] font-bold text-[10px] ">
                  USERNAME
                </p>
                <input
                  type="text"
                  placeholder="EG; james-smith"
                  name="user"
                  id="user"
                  onChange={formik.handleChange}
                  value={formik.values.user}
                  className={
                    formik.errors.user && formik.touched.user
                      ? "pl-4 w-full text-black bg-red-300"
                      : "pl-4 w-full text-black"
                  }
                />
              </div>
              <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2 ">
                <p className="text-[#969696] font-bold text-[10px] ">
                  PASSWORD
                </p>
                <input
                  type="password"
                  placeholder="Type password"
                  name="password"
                  id="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  className={
                    formik.errors.password && formik.touched.password
                      ? "pl-4 w-full text-black bg-red-300"
                      : "pl-4 w-full text-black"
                  }
                />
              </div>
            </div>
            <div className="flex item-center space-x-2 mb-5">
              <input type="checkbox" className="rounded-sm " />
              <label className="text-gris text-xs">REMEMBER ME</label>
            </div>
            <button
              type="submit"
              /*  onClick={handleLogin}  */
              className="bg-amarillo rounded-sm px-5 py-2"
            >
              LOGIN
            </button>
            <div className="flex items-center mt-5 space-x-3">
              <p className="text-xs text-gris  cursor-pointer">
                CREATE AN ACCOUNT
              </p>
              <p className="text-xs text-gris">|</p>
              <p className="text-xs text-gris  cursor-pointer">
                FORGOT YOUR PASSWORD?
              </p>
            </div>
          </form>
        </div>
      </Modal>
      <ToastContainer />
    </>
  );
}

const basicSchema = Yup.object().shape({
  user: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});
