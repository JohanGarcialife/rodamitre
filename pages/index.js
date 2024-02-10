
import { Inter } from "next/font/google";
import Layout from "@/layout/Layout";
import HeroSection from "@/components/heroSection/HeroSection"
import Distribuidores from "@/components/distribuidores/Distribuidores";
import Nosotros from "@/components/nosotros/Nosotros";
import Productos from "@/components/productos/Productos";
import Contacto from "@/components/contacto/Contacto";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>      
      <HeroSection /> 
      <Distribuidores />
      <Nosotros />
      <Productos/>
      <Contacto  />
    </Layout>
  );
}
